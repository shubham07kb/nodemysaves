const fs = require('fs');
const path = require('path');
function jsquery() {
  return '?jsfile=app';
}
function jsscript(query, res, host) {
  p = "appcss='"+fs.readFileSync(path.join(process.env.rootpath+"/host/css/app.css"))+"';appdarkcss='"+fs.readFileSync(path.join(process.env.rootpath+"/host/css/app.dark.css"))+"';webcss='"+fs.readFileSync(path.join(process.env.rootpath+"/host/css/web.css"))+"';webdarkcss='"+fs.readFileSync(path.join(process.env.rootpath+"/host/css/web.dark.css"))+"';acccss='"+fs.readFileSync(path.join(process.env.rootpath+"/host/css/acc.css"))+"';accdarkcss='"+fs.readFileSync(path.join(process.env.rootpath+"/host/css/acc.dark.css"))+"';";
  if (query.jsfile == 'app') {
    p += fs.readFileSync('./host/js/app.js');
  } else if (query.jsfile == 'ext') {
    p += "appurl='" + host + "';";
    p += fs.readFileSync('./host/js/app.js');
  }
  res.set('Content-Type', 'text/javascript');
  res.send(p);
}
module.exports = {
  jsquery: jsquery,
  jsscript: jsscript
}