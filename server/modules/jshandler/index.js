const fs = require('fs');
const path = require('path');
function jsquery() {
  return '?jsfile=app';
}
function jsscript(query, res, host) {
  apphtml=fs.readFileSync(path.join(process.env.rootpath+"/host/html/apprun.min.html"));
  apprunjs=fs.readFileSync(path.join(process.env.rootpath+"/host/js/apprun.min.js"));
  appcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/app.min.css"));
  applightcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/app.light.min.css"));
  appdarkcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/app.dark.min.css"));
  webhtml=fs.readFileSync(path.join(process.env.rootpath+"/host/html/webrun.min.html"));
  webrunjs=fs.readFileSync(path.join(process.env.rootpath+"/host/js/webrun.min.js"));
  webcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/web.min.css"));
  weblightcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/web.light.min.css"));
  webdarkcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/web.dark.min.css"));
  acchtml=fs.readFileSync(path.join(process.env.rootpath+"/host/html/accrun.min.html"));
  accrunjs=fs.readFileSync(path.join(process.env.rootpath+"/host/js/accrun.min.js"));
  acccss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/acc.min.css"));
  acclightcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/acc.light.min.css"));
  accdarkcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/acc.dark.min.css"));
  p = "sitename=`"+process.env.title+"`; "+apprunjs+"apphtml=`"+apphtml+"`;appcss=`"+appcss+"`;applightcss=`"+applightcss+"`;appdarkcss=`"+appdarkcss+"`;webhtml=`"+webhtml+"`;"+webrunjs+"webcss=`"+webcss+"`;weblightcss=`"+weblightcss+"`;webdarkcss=`"+webdarkcss+"`;acchtml=`"+acchtml+"`;"+accrunjs+"acccss=`"+acccss+"`;acclightcss=`"+acclightcss+"`;accdarkcss=`"+accdarkcss+"`;";
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