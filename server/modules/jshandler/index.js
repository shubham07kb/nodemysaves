const fs=require('fs');
const path=require('path');
function jsquery(){
  return '?l=ah';
}
function jsscript(query,res){
    p='';
    if(query.jsfile=='install'){
      p+=fs.readFileSync('./host/js/install.js');
    } else if(query.jsfile=='install'){
      p+=fs.readFileSync('./host/js/ext.js');
    }
    res.set('Content-Type', 'text/javascript');
    res.send(p);
}
module.exports = {
    jsquery : jsquery,
    jsscript : jsscript
}