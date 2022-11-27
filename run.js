const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    // service: 'gmail',
    auth: {
      user: 'kumarbansal.shubham07@gmail.com',
      pass: 'wojjdxyusycttmwf'
    }
});
var mailOptions = {
    from: 'web@mysaves.live',
    to: 'shubhamkumarbansal07@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy, at applino! wow from web'
};
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});