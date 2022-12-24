// File: email.js
const nodemailer = require('nodemailer');

var env = process.env.NODE_ENV || 'development';
if(env === 'development'){
    require('dotenv').config()
}

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 587,
  tls: {
    rejectUnauthorized: true,
    minVersion: "TLSv1.2"
  },
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

function sendEmail(from , to, subject, text) {
  const mailOptions = {
    from,
    to,
    subject,
    text
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
}

module.exports = { sendEmail };
