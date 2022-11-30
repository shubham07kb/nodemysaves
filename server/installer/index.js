const mongo=require('mongodb');
const nodemailer = require('nodemailer');
const path=require('path');
const MongoClient = mongo.MongoClient;
function connectmongo(url,res){
    url=url.trim();
    url=url.replace(' ','+');
    if(url!='' && (url.startsWith('mongodb://') || url.startsWith('mongodb+srv://'))){
        MongoClient.connect(url, function(err, db) {
            if (err) {console.log(err); res.send('{"statcode":"0" , "stat":"Error", "error":"Connection Error: Failed to connect to MongoDB"}');};
            localStorage.setItem('installstate', 'b');
            localStorage.setItem('dbtype', 'mongo');
            localStorage.setItem('mongostr', url);
            res.send('{"statcode":"1" , "stat":"Succes", "code":"'+localStorage.getItem('installstate')+'"}');
        });
    } else{
        res.send('{"statcode":"0" , "stat":"Error", "error":"Connection Error: Empty URL or Invalid URL"}');
    }
}
function digitotpgen(count){
    var chars = '0123456789'.split('');
    var result = '';
    for(var i=0; i<count; i++){
      var x = Math.floor(Math.random() * chars.length);
      result += chars[x];
    }
    return result;
}
function connectmailwithservice(req,res){
    mes='';
    output=0;
    if(req.a=='mbse' || req.a=='mbhe'){
        try{
            if(req.a=='mbse'){
                const mailconfig = {
                    service: req.mailservice,
                    auth: {
                        user: req.euname,
                        pass: req.epassword
                    }
                };
            } else if(req.a=='mbhe'){
                const mailconfig = {
                    host: req.mailhost,
                    post: req.mailport,
                    auth: {
                        user: req.euname,
                        pass: req.epassword
                    }
                };
            }
            digitotpgen(6)
            var mailOptions = {
                from: req.email,
                to: req.email,
                subject: 'OTP to Check Mail Service',
                text: 'Your OTP is: '+digitotpgen(6)
            };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  res.send('{"statcode":"0" , "stat":"Error", "error":"Mail Error: '+error+'"}');
                } else {
                  res.send('{"statcode":"1" , "stat":"Succes", "code":"'+localStorage.getItem('installstate')+'"}');
                }
            });
        } catch(err){
            res.send('{"statcode":"0" , "stat":"Error", "error":"Mail Error: '+err+'"}');
        }
    } else{
        res.send('{"statcode":"0" , "stat":"Error", "error":"Parameter Error: Invalid Request"}');
    }

}
function connectmailwithhost(req,res){
    mes='';
    output=0;
    
    connectmail(output,mes,res);
}
function connectmail(output,mes,res){
    if(output==1){
        res.send('{"statcode":"1" , "stat":"Succes", "code":"'+localStorage.getItem('installstate')+'"}');
    } else{
        res.send('{"statcode":"0" , "stat":"Error", "error":"Mail Error: '+mes+'"}');
    }
}
module.exports={
    connectmongo: connectmongo,
    connectmailwithservice: connectmailwithservice.apply,
    connectmailwithhost: connectmailwithhost
}