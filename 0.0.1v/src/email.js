// File: email.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  tls: {
    rejectUnauthorized: true,
    minVersion: "TLSv1.2"
  },
  auth: {
    user: 'marcellus.vonrueden@ethereal.email',
    pass: 'Hk72EkuV9gCcy8fFUv'
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
