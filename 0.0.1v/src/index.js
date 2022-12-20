const express = require('express');
const { sendEmail } = require('./email');

var env = process.env.NODE_ENV || 'development';
if(env === 'development'){
    require('dotenv').config({path:'../../.env'})
}

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

app.listen(process.env.PORT, () => {
  console.log(`Express app listening on port ${process.env.PORT}`);
});