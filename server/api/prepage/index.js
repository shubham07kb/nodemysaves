const fs=require('fs');
function meta(page,req,res){
    if(page==''){
        
    } else if(page=='signin'){
        res.send('{"res:":"ok","title":"Sign In","desc":"Sign In","keywords":"Sign In, Login, Welcome Back","author":"'+process.env.creator+'"}');
    } 
}
function html(page,req,res){
    if(page==''){
        
    } else if(page=='signin'){
        res.send(fs.readFileSync('./host/html/signin.min.html'));
    }
}
module.exports={
    meta:meta,
    html:html
}