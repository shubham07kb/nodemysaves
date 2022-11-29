const fs=require('fs');
const path=require('path');
const localstorage =require(path.join(__dirname,'..','localstorage'));
localStorage=new localstorage.localStorage(path.join(process.env.rootpath+'/server/localstorage'));
localStorage.setItem('installstate', 'a');
function jsquery(){
  if(process.env.runstat==3){
    if(localStorage.getItem('installstate')==null){
        localStorage.setItem('installstate', 'a');
    }
    return '?jsfile=install';
  } else{
    return '';
  }
}
function jsscript(query,res){
    if(query.jsfile=='install'){
      p='';
      p+=fs.readFileSync('./host/js/install.js');
    }
    res.set('Content-Type', 'text/javascript');
    res.send(p);
}
module.exports = {
    jsquery : jsquery,
    jsscript : jsscript
}