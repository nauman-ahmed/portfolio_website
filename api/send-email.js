import nodemailer from 'nodemailer';

/**
 * Contact endpoint, running on Vercel alongside the site.
 *
 * Replaces the separate Render service, which slept after ~15 minutes and made
 * the first submission of the day take 21 seconds — long enough that most
 * visitors assumed the form was broken. Same origin as the site, so there is
 * no CORS handshake either.
 *
 * Routing note: vercel.json rewrites everything to /index.html for the SPA, so
 * its `source` is `/((?!api/).*)`. Without that exclusion this route would be
 * swallowed and every submission would receive the HTML page instead of JSON.
 * (vercel.json rejects unknown keys, so the explanation has to live here.)
 */

const LIMITS = { name: 100, email: 254, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort throttle. Serverless instances aren't shared, so this only slows
// a flood hitting one warm instance — the honeypot does the real bot filtering.
const RATE = { windowMs: 15 * 60 * 1000, max: 5 };
const hits = new Map();

function throttled(ip) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.start > RATE.windowMs) {
    hits.set(ip, { start: now, count: 1 });
    return false;
  }
  rec.count += 1;
  return rec.count > RATE.max;
}

function validate(body) {
  const errors = [];
  const clean = {};

  for (const field of ['name', 'email', 'message']) {
    const value = body?.[field];
    if (typeof value !== 'string' || !value.trim()) {
      errors.push(`${field} is required`);
      continue;
    }
    const trimmed = value.trim();
    if (trimmed.length > LIMITS[field]) {
      errors.push(`${field} must be ${LIMITS[field]} characters or fewer`);
      continue;
    }
    clean[field] = trimmed;
  }

  if (clean.email && !EMAIL_PATTERN.test(clean.email)) {
    errors.push('email is not a valid address');
  }
  // Newlines in these must never reach a mail header.
  if (clean.name && /[\r\n]/.test(clean.name)) errors.push('name is invalid');
  if (clean.email && /[\r\n]/.test(clean.email)) errors.push('email is invalid');

  return { errors, clean };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error('EMAIL_USER / EMAIL_PASS are not configured');
    return res.status(500).json({ success: false, message: 'Contact is temporarily unavailable' });
  }

  // Bots fill hidden fields; people don't. Answer 200 so they learn nothing.
  if (typeof req.body?.company === 'string' && req.body.company.trim() !== '') {
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  }

  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (throttled(ip)) {
    return res.status(429).json({
      success: false,
      message: 'Too many messages sent from this address. Please try again later.',
    });
  }

  const { errors, clean } = validate(req.body);
  if (errors.length) {
    return res.status(400).json({ success: false, message: errors.join('; ') });
  }

  const { name, email, message } = clean;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    await transporter.sendMail({
      // Send as the authenticated mailbox so SPF/DKIM pass; the visitor goes in
      // Reply-To, which is what hitting reply should actually use.
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('sendMail failed:', error.message);
    return res.status(500).json({ success: false, message: 'Error sending email' });
  }
}
