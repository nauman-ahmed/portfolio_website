// File: api/send-email.js

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "vils yuht uyla xrov",
        pass: "naumanahmed449@gmail.com",
      },
    });

    const mailOptions = {
      from: email,
      to: 'naumanahmed449@gmail.com',
      subject: `New contact from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
