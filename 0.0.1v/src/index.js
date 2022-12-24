const express = require('express');
const { sendEmail } = require('./email');

var env = process.env.NODE_ENV || 'development';
if(env === 'development'){
    require('dotenv').config()
}

const app = express();

app.use(express.urlencoded({extended:true}))

app.post('/send-email', async (req, res) => {
  try {
    const data = req.body;
    if(data.firstName && data.lastName && data.text){
      const info = await sendEmail( process.env.EMAIL, process.env.EMAIL, `${data.firstName} ${data.lastName} sent you a Message .`, data.text);
      console.log(`Email sent: ${info.response}`);
      res.send('Email sent successfully!');
    }else{
      res.send('All fields required ...')
      return;
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Express app listening on port ${process.env.PORT}`);
});