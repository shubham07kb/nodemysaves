const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const uuid= require('uuid');
const db = require('../modules/db');
const mail = require('../modules/mail');
async function uniquerm(prc){
  let uuidv4=uuid.v4();
  q=await db.query(prc, 'rmkeys', {rm:uuidv4});
  if(q.length==0){
    return uuidv4;
  } else {
    return await uniquerm();
  }
}
emailreg = /\S+@\S+\.\S+/;
usernamereg = '^[a-zA-Z0-9_]{3,20}$';
pswdreg = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
async function worker(req, res, prc) {
  res.header('Content-Type', 'application/json');
  if (req.body.forthe == 'ga') {
    if(req.body.acceou!=undefined && req.body.acceou!='' && req.body.pswd!=undefined && req.body.pswd!='' && req.body.rm!=undefined && req.body.rm!=''){
      let acceou=req.body.acceou;
      let pswd=req.body.pswd;
      let rm=req.body.rm;
      if((acceou.match(emailreg) || acceou.match(usernamereg)) && pswd.match(pswdreg) && (rm=='y' || rm=='n')){
        if(acceou.match(emailreg)){
          q={email:acceou};
        } else if(acceou.match(usernamereg)){
          q={username:acceou};
        }
        q=await db.query(prc, 'users', q);
        if(q.length==1){
          if(bcrypt.compareSync(pswd, q[0].pswd)){
            let jwtkey=prc.jwt_key;
            let mainid=q[0]._id;
            let token=jwt.sign({ id: mainid },jwtkey,{algorithm:'HS256'});
            if(rm=='y'){
              qrm=await db.query(prc, 'usersext', {uid:mainid});
              rm5=qrm[0].rms.r5;
              if(rm5!=''){await db.del(prc, 'rmkeys', {rm:rm5});}
              rmkey=await uniquerm(prc);
              rm1=rmkey; rm2=qrm[0].rms.r1; rm3=qrm[0].rms.r2; rm4=qrm[0].rms.r3; rm5=qrm[0].rms.r4;
              await db.update(prc, 'usersext', {rms:{r1:rm1,r2:rm2,r3:rm3,r4:rm4,r5:rm5}}, {uid:mainid});
              await db.insert(prc, 'rmkeys', {rm:rmkey, uid:mainid});
            } else {rmkey='';}
            token=token.split('.');
            res.send({ status: 'success', statcode:1, message: 'Logged in.', token:{header:token[0],data:token[1],key:token[2]} , rm:rm, rmk:rmkey});
          } else {
            res.send({ status: 'error', statcode:0, message: 'Invalid request.' });
          }
        } else{
          res.send({ status: 'error', statcode:0, message: 'Invalid request.' });
        }
      } else{
        res.send({ status: 'error', statcode:0, message: 'Invalid request.' });
      }
    } else{
      res.send({ status: 'error', statcode:0, message: 'Invalid request.' });
    }
  } else if (req.body.forthe == 'va') {
    if(req.body.otp!='' && req.body.otp!=undefined && req.body.email!='' && req.body.email!=undefined){
      if(req.body.email.match(emailreg) && req.body.otp.match('^[0-9]{6}$')){
        let q={email:req.body.email};
        qq = await db.query(prc, 'createuser', q);
        if(qq.length!=1){
          res.send({ status: 'error', statcode:0, message: 'Invalid request.' });
        } else {
          if(qq[0].otp!=req.body.otp){
            if(qq[0].attempt>=2){
              qq=db.del(prc, 'createuser', q);
              res.send({ status: 'error', statcode:0, message: 'Too many attempts.' });
            } else {
              db.update(prc, 'createuser', {attempt:qq[0].attempt+1}, q);
              res.send({ status: 'error', statcode:0, message: 'Invalid OTP.' });
            }
          } else{
            q={email:qq[0].email,username:qq[0].username,pswd:qq[0].pswd,role:'u'};
            qq=await db.del(prc, 'createuser', q);
            q = await db.insert(prc, 'users', q);
            let uid=q.message.insertedId;
            q=await db.insert(prc, 'usersext', {uid:uid,rms:{r1:'',r2:'',r3:'',r4:'',r5:''}});
            // p=JSON.stringify(q.message.insertedId).slice(1,-1);
            // let jwtkey=prc.jwt_key;
            // sjwt=jwt.sign({id:p},jwtkey,{algorithm:'HS512'});
            mail.sendMail(prc, qq.email, 'Welcome to the club!', 'Welcome to the club!');
            res.send({ status: 'success', statcode:1, message: 'Validated.'});
          }
        }
      } else {
        res.send({ status: 'error', statcode:0, message: 'Invalid request.' });
      }
    } else {
      res.send({ status: 'error', statcode:0, message: 'Invalid request.' });
    }
  } else if (req.body.forthe == 'ca') {
    if(req.body.email == '' || req.body.email == undefined || req.body.username == '' || req.body.username == undefined || req.body.pswd == '' || req.body.pswd == undefined){
      res.send({ status: 'error', message: 'Invalid request.' });
    } else {
      if(req.body.email.match(emailreg) && req.body.username.match(usernamereg) && req.body.pswd.match(pswdreg)){
        let q1={email:req.body.email};
        q1 = await db.query(prc, 'users', q1);
        let q2={username:req.body.username};
        q2 = await db.query(prc, 'users', q2);
        if(q1.length==0 && q2.length==0){
          let otp=Math.floor(100000 + Math.random() * 900000);
          otp=otp.toString();
          let q={email:req.body.email};
          q = await db.del(prc, 'createuser', q);
          q={username:req.body.username};
          q = await db.del(prc, 'createuser', q);
          const salt = await bcrypt.genSalt(10);
          const secPass = await bcrypt.hash(req.body.pswd, salt);
          q={email:req.body.email,username:req.body.username,pswd:secPass,otp:otp,attempt:0};
          p = await db.insert(prc, 'createuser', q);
          if(p.statcode==1){
            let mailbody = 'Your OTP is: ' + otp;
            let mailsubject = 'OTP for account creation';
            let mailto = req.body.email;
            let r=await mail.sendMailWithRes(prc,res,mailto,mailsubject,mailbody);
          } else {
            res.send({ status: 'error', statcode:0, message: 'Failed.' });
          }
        } else {
          res.send({ status: 'error', statcode:0, message: 'Email or username already exists.' });
        } 
      } else {
        res.send({ status: 'error', statcode:0, message: 'Invalid request.' });
      }
    }
  } else if (req.body.forthe == 'fa') {

  } else {
    res.send({ status: 'error', statcode:0, message: 'Invalid request.' });
  }
}
function applier() {

}
module.exports = {
  worker: worker,
  applier: applier
}