const nodemailer = require('nodemailer');
require('dotenv').config(); // To use environment variables from .env

const sendEmail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your app password (not regular password)
      },
    });

    const info = await transporter.sendMail({
      from: `"Rutvik" <${process.env.EMAIL_USER}>`,
      to: 'rutvikbhil008@gmail.com', // Change to the actual recipient
      subject: 'Personal Email Test',
      html: '<h2>This is sent from my personal Gmail using Nodemailer</h2>',
    });

    res.json({ message: 'Email sent successfully', info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = sendEmail;
