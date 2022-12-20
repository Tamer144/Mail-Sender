const express = require('express');
const { sendEmail } = require('./email');

const app = express();

app.post('/send-email', async (req, res) => {
  try {
    const info = await sendEmail('marcellus.vonrueden@ethereal.email' , 'marcellus.vonrueden@ethereal.email', 'a new message from your Website .', 'This is a test email sent from an Express.js app.');
    console.log(`Email sent: ${info.response}`);
    res.send('Email sent successfully!');
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.listen(3000, () => {
  console.log('Express app listening on port 3000');
});