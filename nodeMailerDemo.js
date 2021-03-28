var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kalpyapawar123@gmail.com',
    pass: 'kalpesh'
  }
});

var mailOptions = {
  from: 'kalpyapawar123@gmail.com',
  to: 'kalpesh.pawar@walchandsangli.ac.in',
  subject: 'Sending Email using Node.js',
  text: 'Hi i am kp and this is a test email' 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});