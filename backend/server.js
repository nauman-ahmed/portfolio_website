const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

const { EMAIL_USER, EMAIL_PASS } = process.env;
if (!EMAIL_USER || !EMAIL_PASS) {
  console.error('Missing EMAIL_USER / EMAIL_PASS — refusing to start.');
  process.exit(1);
}

// Render terminates TLS upstream, so the client IP arrives in X-Forwarded-For.
// Without this the rate limiter would see one proxy IP and throttle everyone together.
app.set('trust proxy', 1);

// Only the portfolio front ends may call this API. Override in production with
// ALLOWED_ORIGINS="https://a.example,https://b.example".
const allowedOrigins = (process.env.ALLOWED_ORIGINS ||
  [
    'https://portfolio-website-nauman.vercel.app',
    'http://localhost:5173',
    'http://localhost:5174',
  ].join(','))
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin(origin, callback) {
    // Same-origin/curl requests send no Origin header; browsers always do.
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Origin not allowed'));
  },
  methods: ['POST'],
}));

// Cap the body so a large payload cannot be used to exhaust memory.
app.use(express.json({ limit: '10kb' }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many messages sent from this address. Please try again later.',
  },
});

// One transporter for the process rather than one per request.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: EMAIL_USER, pass: EMAIL_PASS },
});

const LIMITS = { name: 100, email: 254, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateSubmission(body) {
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

  // Header injection guard: newlines in these values must never reach a header.
  if (clean.name && /[\r\n]/.test(clean.name)) errors.push('name is invalid');
  if (clean.email && /[\r\n]/.test(clean.email)) errors.push('email is invalid');

  return { errors, clean };
}

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.post('/api/send-email', contactLimiter, async (req, res) => {
  const { errors, clean } = validateSubmission(req.body);
  if (errors.length) {
    return res.status(400).json({ success: false, message: errors.join('; ') });
  }

  const { name, email, message } = clean;

  try {
    await transporter.sendMail({
      // Send as the authenticated mailbox so SPF/DKIM pass; the visitor's
      // address goes in Reply-To, which is what "reply" should actually use.
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    // Log server-side; never return provider internals to the client.
    console.error('sendMail failed:', error.message);
    return res.status(500).json({ success: false, message: 'Error sending email' });
  }
});

// Keep every failure JSON: express' default handler renders HTML, which the
// front end cannot parse, and returns 500 for what are really 403/413 cases.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err && err.message === 'Origin not allowed') {
    return res.status(403).json({ success: false, message: 'Origin not allowed' });
  }
  if (err && err.type === 'entity.too.large') {
    return res.status(413).json({ success: false, message: 'Message is too large' });
  }
  console.error('Unhandled error:', err && err.message);
  return res.status(500).json({ success: false, message: 'Unexpected server error' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Allowed origins: ${allowedOrigins.join(', ')}`);
});
