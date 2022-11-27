const fs=require('fs');
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./server/ls');
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