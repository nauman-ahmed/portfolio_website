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

/** Never interpolate visitor input into HTML without escaping it. */
function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Gmail shows self-addressed mail as "me", and it lands in with everything else.
 * Plus-addressing keeps it in the inbox but makes it trivially filterable:
 * a single Gmail filter on "to: you+portfolio@gmail.com" can label and star it.
 * Override with EMAIL_TO if you would rather route it somewhere else.
 */
function inboxAddress(user) {
  if (process.env.EMAIL_TO) return process.env.EMAIL_TO;
  const [local, domain] = user.split('@');
  if (!domain) return user;
  const gmail = /^(gmail\.com|googlemail\.com)$/i.test(domain);
  return gmail && !local.includes('+') ? `${local}+portfolio@${domain}` : user;
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
  //
  // The field is deliberately NOT called something like "company": browser
  // address autofill fills those even with autocomplete="off", which would make
  // this silently swallow a real message — the worst failure a contact form can
  // have. Logged on every trigger so a false positive is visible in the logs
  // rather than invisible to everyone.
  const trap = req.body?.hp_reference;
  if (typeof trap === 'string' && trap.trim() !== '') {
    console.warn('[send-email] honeypot triggered — no mail sent. value=%j', trap.slice(0, 60));
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

    // A one-line preview of the message, so the subject says what they want
    // without needing to open it. Newlines would break the header.
    const snippet = message.replace(/\s+/g, ' ').trim().slice(0, 60);
    const subject = `Portfolio enquiry — ${name}: ${snippet}${message.length > 60 ? '…' : ''}`;

    const info = await transporter.sendMail({
      // Send as the authenticated mailbox so SPF/DKIM pass; the visitor goes in
      // Reply-To, which is what hitting reply should actually use.
      from: `"Portfolio · ${name}" <${EMAIL_USER}>`,
      to: inboxAddress(EMAIL_USER),
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject,
      text: `New enquiry via your portfolio\n\nName:  ${name}\nEmail: ${email}\n\n${message}\n\n— Reply directly to this email to answer ${name}.`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111827;">
          <p style="margin:0 0 4px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#b45309;font-weight:600;">Portfolio enquiry</p>
          <h1 style="margin:0 0 20px;font-size:20px;line-height:1.3;color:#111827;">${escapeHtml(name)}</h1>

          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;font-size:14px;">
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;width:80px;">Email</td>
              <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;">
                <a href="mailto:${escapeHtml(email)}" style="color:#1d4ed8;text-decoration:none;">${escapeHtml(email)}</a>
              </td>
            </tr>
          </table>

          <div style="background:#f9fafb;border-left:3px solid #f2a93b;padding:16px;border-radius:2px;">
            <p style="margin:0;font-size:15px;line-height:1.65;white-space:pre-wrap;">${escapeHtml(message)}</p>
          </div>

          <p style="margin:20px 0 0;font-size:13px;color:#6b7280;">
            Reply directly to this email and it goes straight to ${escapeHtml(name)}.
          </p>
        </div>
      `,
    });

    // Surfaced in the Vercel function logs, so "it said sent but nothing arrived"
    // can be answered: either Gmail accepted it, or it never got that far.
    console.log(
      '[send-email] accepted=%j rejected=%j messageId=%s',
      info.accepted, info.rejected, info.messageId
    );

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    // The client message stays generic on purpose; the detail goes to the logs.
    // code EAUTH almost always means the Gmail App Password is wrong, revoked,
    // or was never set in this environment.
    console.error(
      '[send-email] FAILED code=%s message=%s%s',
      error.code || 'UNKNOWN',
      error.message,
      error.code === 'EAUTH'
        ? ' -> Gmail rejected the credentials. Generate a new App Password and set EMAIL_USER / EMAIL_PASS in Vercel, then redeploy.'
        : ''
    );
    return res.status(500).json({ success: false, message: 'Error sending email' });
  }
}
