const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

// Use CORS middleware to allow requests from specific origins
app.use(cors({
  origin: '*'  // This allows requests from any origin. You can restrict it to a specific domain.
}));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API endpoint to handle form submission
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Log data to console (optional for debugging)
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Set up Nodemailer to send the email (customize this part)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Form Submission',
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.json({
        success: 500,
        message: 'Error sending email'  
      });
    }
    res.json({
      success: true,
      message: 'Email sent successfully!'  // Ensure the response is valid JSON
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
