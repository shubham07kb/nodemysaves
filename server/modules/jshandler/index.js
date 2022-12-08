const fs = require('fs');
const path = require('path');
function jsquery() {
  return '?jsfile=app';
}
function jsscript(query, res, host) {
  appcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/app.min.css"));
  applightcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/app.light.min.css"));
  appdarkcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/app.dark.min.css"));
  webcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/web.min.css"));
  weblightcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/web.light.min.css"));
  webdarkcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/web.dark.min.css"));
  acccss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/acc.min.css"));
  acclightcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/acc.light.min.css"));
  accdarkcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/acc.dark.min.css"));
  p = "sitename=`"+process.env.title+"`; appcss=`"+appcss+"`;applightcss=`"+applightcss+"`;appdarkcss=`"+appdarkcss+"`;webcss=`"+webcss+"`;weblightcss=`"+weblightcss+"`;webdarkcss=`"+webdarkcss+"`;acccss=`"+acccss+"`;acclightcss=`"+acclightcss+"`;accdarkcss=`"+accdarkcss+"`;";
  p+=fs.readFileSync(path.join(process.env.rootpath+"/host/js/socket.io.min.js"));
  if (query.jsfile == 'app') {
    p += fs.readFileSync('./host/js/app.min.js');
  } else if (query.jsfile == 'ext') {
    p += "appurl='" + host + "';";
    p += fs.readFileSync('./host/js/ext.min.js');
  }
  res.set('Content-Type', 'text/javascript');
  res.send(p);
}
module.exports = {
  jsquery: jsquery,
  jsscript: jsscript
}