const fs=require('fs');
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./server/localstorage');
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
function jsscript(query){
    if(query.jsfile=='install'){
      p='';
      p+=fs.readFileSync('./host/js/install.js');
    }
    return p;
}
module.exports = {
    jsquery : jsquery,
    jsscript : jsscript
}