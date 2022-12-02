const fs=require('fs');
const path=require('path');
function jsquery(){
  return '?jsfile=app';
}
function jsscript(query,res){
    p='';
    if(query.jsfile=='app'){
      p+=fs.readFileSync('./host/js/app.js');
    } else if(query.jsfile=='ext'){
      p+=fs.readFileSync('./host/js/ext.js');
    }
    res.set('Content-Type', 'text/javascript');
    res.send(p);
}
module.exports = {
    jsquery : jsquery,
    jsscript : jsscript
}