const bcrypt = require("bcryptjs");
const db = require('../modules/db');
const mail = require('../modules/mail');
emailreg = /\S+@\S+\.\S+/;
//regex username with alphanumeric, underscore, and more than 3 characters and less than 20
usernamereg = '^[a-zA-Z0-9_]{3,20}$';
pswdreg = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
async function worker(req, res, prc) {
  res.header('Content-Type', 'application/json');
  if (req.body.forthe == 'ga') {

  } else if (req.body.forthe == 'ca') {
    if (req.body.email == '' || req.body.email == undefined || req.body.username == '' || req.body.username == undefined || req.body.pswd == '' || req.body.pswd == undefined) {
      res.send({ status: 'error', message: 'Invalid request.' });
    } else {
      if(req.body.email.match(emailreg) && req.body.username.match(usernamereg) && req.body.pswd.match(pswdreg)){
        let q1={email:req.body.email};
        q1 = await db.query(prc, 'user', q1);
        let q2={username:req.body.username};
        q2 = await db.query(prc, 'user', q2);
        if(q1.length==0 && q2.length==0){
          let otp=Math.floor(100000 + Math.random() * 900000);
          otp=otp.toString();
          let q={email:req.body.email};
          q = await db.del(prc, 'createuser', q);
          q={username:req.body.username};
          q = await db.del(prc, 'createuser', q);
          q={email:req.body.email,username:req.body.username,pswd:req.body.pswd,otp:otp,attempt:0};
          p = await db.insert(prc, 'createuser', q);
          if(p.statcode==1){
            let mailbody = 'Your OTP is: ' + otp;
            let mailsubject = 'OTP for account creation';
            let mailto = req.body.email;
            let r=await mail.sendMailWithRes(prc,res,mailto,mailsubject,mailbody);
          } else {
            res.send({ status: 'error', message: 'Failed.' });
          }
        } else {
          res.send({ status: 'error', message: 'Email or username already exists.' });
        } 
      } else {
        res.send({ status: 'error', message: 'Invalid request.' });
      }
    }
  } else if (req.body.forthe == 'fa') {

  } else {
    res.send({ status: 'error', message: 'Invalid request.' });
  }
}
function applier() {

}
module.exports = {
  worker: worker,
  applier: applier
}