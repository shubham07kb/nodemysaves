const fs = require('fs');
const path = require('path');
function jsquery() {
  return '?jsfile=app';
}
function jsscript(query, res, host) {
  p='/* app.js */';
  if(query.jsfile == 'app' || query.jsfile == 'ext'){
    apphtml=fs.readFileSync(path.join(process.env.rootpath+"/host/html/app/apprun.min.html"));
    apprunjs=fs.readFileSync(path.join(process.env.rootpath+"/host/js/app/apprun.min.js"));
    appcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/app/app.min.css"));
    applightcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/app/app.light.min.css"));
    appdarkcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/app/app.dark.min.css"));
    webhtml=fs.readFileSync(path.join(process.env.rootpath+"/host/html/web/webrun.min.html"));
    webrunjs=fs.readFileSync(path.join(process.env.rootpath+"/host/js/web/webrun.min.js"));
    webcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/web/web.min.css"));
    weblightcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/web/web.light.min.css"));
    webdarkcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/web/web.dark.min.css"));
    acchtml=fs.readFileSync(path.join(process.env.rootpath+"/host/html/acc/accrun.min.html"));
    accrunjs=fs.readFileSync(path.join(process.env.rootpath+"/host/js/acc/accrun.min.js"));
    acccss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/acc/acc.min.css"));
    acclightcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/acc/acc.light.min.css"));
    accdarkcss=fs.readFileSync(path.join(process.env.rootpath+"/host/css/acc/acc.dark.min.css"));
    p+="sitename=`"+process.env.title+"`; "+apprunjs+"apphtml=`"+apphtml+"`;appcss=`"+appcss+"`;applightcss=`"+applightcss+"`;appdarkcss=`"+appdarkcss+"`;webhtml=`"+webhtml+"`;"+webrunjs+"webcss=`"+webcss+"`;weblightcss=`"+weblightcss+"`;webdarkcss=`"+webdarkcss+"`;acchtml=`"+acchtml+"`;"+accrunjs+"acccss=`"+acccss+"`;acclightcss=`"+acclightcss+"`;accdarkcss=`"+accdarkcss+"`;";
    p+=fs.readFileSync(path.join(process.env.rootpath+"/host/js/lib/socket.io.min.js"));
    p+=fs.readFileSync(path.join(process.env.rootpath+"/host/js/lib/jwt_decode.min.js"));
    if (query.jsfile == 'app'){
      if(process.env.iswebapp){
        p+=fs.readFileSync(path.join(process.env.rootpath+"/host/js/service-worker.min.js"));;
      };
      p += fs.readFileSync('./host/js/app.min.js');
    } else if (query.jsfile == 'ext') {
      p += "appurl='" + host + "';";
      p += fs.readFileSync('./host/js/ext.min.js');
    }
  } else if(query.jsfile == 'serviceworker'){
    p+=fs.readFileSync('./host/js/sw.min.js');
  }
  res.set('Content-Type', 'text/javascript');
  res.send(p);
}
module.exports = {
  jsquery: jsquery,
  jsscript: jsscript
}