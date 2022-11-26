const fs=require('fs');
function jsquery(){
  if(process.env.runstat==3){
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