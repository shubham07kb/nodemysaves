const express        = require('express');
const fs             = require('fs');
const path           = require('path');
const os             = require('os');
const session        = require('express-session');
const cors           = require('cors');
const cookieParser   = require('cookie-parser');
const bodyParser     = require('body-parser');
const bcrypt         = require("bcryptjs");
const jshandler      = require('./server/modules/jshandler');
const installer      = require('./server/modules/installer');
process.env.rootpath=__dirname;

installer.install('config.json');                     // console.log(JSON.stringify(process.env, null, 4));

const replacerFunc   = ()=>{const visited=new WeakSet();return (key, value)=>{if(typeof value==="object" && value!==null){if(visited.has(value)){return;}visited.add(value);}return value;};};
const app            = express();
const port           = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.use(cors());  //5 */1 * * *  ,  0 0 0-23 * * *  ,  "cronpass": "Shub"
app.use(urlencodedParser);
app.use(cookieParser());
app.use(session({
  secret: 'mysavesasecret',
  resave: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  saveUninitialized: true,
}));
app.set('views', path.join(__dirname, 'host/html'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'host/static')));
app.use('/content', express.static(path.join(__dirname, 'host')));

app.all('*', (req, res) => {
  appparams=req.params[0].split('/');
  appparams.shift();
  reqhostname="https://"+req.hostname;
  if(appparams[0]=='app.js' || (appparams[0]=='server' && (appparams[1]=='cron' || appparams[1]=='req'))){
    if(appparams[0]=='app.js'){
      jsscript=jshandler.jsscript(req.query,res,reqhostname);
    } else if(appparams[0]=='server'){
      res.set('Content-Type', 'application/json');
      if(appparams[1]=='cron'){
        res.send(JSON.stringify(req, replacerFunc()));
      } else if(appparams[1]=='req'){
        res.send(JSON.stringify(req, replacerFunc()));
      }
    }
  } else {
    jsquery=jshandler.jsquery(res);
    res.render('index.html',{htmltitle: process.env.title, jsquery: jsquery});
  }
});

app.listen(port, () => {
  console.log(`App running at ${port}`)
});