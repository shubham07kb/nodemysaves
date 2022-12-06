const fs=require('fs');
function meta(page,req,res){
    res.header('Content-Type', 'application/json');
    if(page=='signup' || page=='register'){
        res.send('{"res:":"ok","title":"Sign Up","desc":"Sign Up","keywords":"Sign Up, Register, New Account","author":"'+process.env.creator+'"}');
    } else if(page=='signin' || page=='login'){
        res.send('{"res:":"ok","title":"Sign In","desc":"Sign In","keywords":"Sign In, Login, Welcome Back","author":"'+process.env.creator+'"}');
    } else if(page=='forgot'){
        res.send('{"res:":"ok","title":"Forgot Password","desc":"Forgot Password","keywords":"Forgot Password, Reset Password","author":"'+process.env.creator+'"}');
    }
}
function html(page,req,res){
    if(page=='signup' || page=='register'){
        res.send(fs.readFileSync('./host/html/signup.min.html'));
    } else if(page=='signin' || page=='login'){
        res.send(fs.readFileSync('./host/html/signin.min.html'));
    } else if(page=='forgot'){
        res.send(fs.readFileSync('./host/html/forgot.min.html'));
    }
}
module.exports={
    meta:meta,
    html:html
}