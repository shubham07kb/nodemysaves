const express        = require('express');
const cors           = require('cors');
const app            = express();
const http           = require('http').createServer(app);
const io             = require('socket.io')(http,{cors:{origin: "*",methods: ["GET", "POST", "PUT"]}});
const fs             = require('fs');
const path           = require('path');
const os             = require('os');
const session        = require('express-session');
const cookieParser   = require('cookie-parser');
const bodyParser     = require('body-parser');
const compression    = require('compression');

const account        = require('./server/acc');
const apihandler     = require('./server/api');
const appmodule      = require('./server/base');
const port           = process.env.PORT || 3000;
process.env.rootpath =__dirname;

appmodule.installer('config.json');

const replacerFunc   = ()=>{const visited=new WeakSet();return (key, value)=>{if(typeof value==="object" && value!==null){if(visited.has(value)){return;}visited.add(value);}return value;};};
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.set('views', path.join(__dirname, 'host/html'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'host/static')));
app.use('/content', express.static(path.join(__dirname, 'host')));
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
app.use(cors());
app.use(urlencodedParser);
app.use(compression());
app.use(cookieParser(httpOnly=false));
app.use(session({secret:process.env.session_key,resave: true,cookie:{maxAge:1000*60*60*24},saveUninitialized: true}));

async function apphandle(req,res){
  appparams=req.params[0].split('/');
  appparams.shift();
  reqhostname="https://"+req.hostname;
  accdata=account.getaccount(req,process.env);
  if(appparams[0]=='mo'){
    account.getaccount(req,process.env);
    res.send(reqhostname);
  } else if(appparams[0]=='app.js'){
    jsscript=appmodule.jsscript(req.query,res,reqhostname);
  } else if(appparams[0]=='minify'){
    appmodule.minify(res,process.env);
  } else if(appparams[0]=='server' && (appparams[1]=='cron' || appparams[1]=='req')){
    res.set('Content-Type', 'application/json');
    if(appparams[1]=='cron'){
      res.send(JSON.stringify(req, replacerFunc()));
    } else if(appparams[1]=='req'){
      res.send(JSON.stringify(req, replacerFunc()));
    }
  } else if(appparams[0]=='api' && ((appparams[1]=='prepage' && (appparams[2]=='html' || appparams[2]=='meta') && appparams[3]!='' && appparams[3]!=undefined) || (appparams[1]=='get' && (appparams[2]=='ip' || appparams[2]=='ua')) || (appparams[1]=='shortlink' && appparams[2]!='' && appparams[2]!=undefined) || (appparams[1]=='analytics'))){
    if(appparams[1]=='prepage'){
      if(appparams[2]=='html'){
        apihandler.prepagehtml(appparams[3],req,res);
      } else if(appparams[2]=='meta'){
        apihandler.prepagemeta(appparams[3],req,res);
      }
    } else if(appparams[1]=='get'){
      if(appparams[2]=='ip'){
        res.header('Content-Type', 'application/json');
        res.send(apihandler.getip(req));
      } else if(appparams[2]=='ua'){
        res.header('Content-Type', 'application/json');
        res.send(apihandler.userpraser(req));
      }
    } else if(appparams[1]=='shortlink'){
      apihandler.shortlinkapi(appparams[2],res,process.env);
    } else if(appparams[1]=='analytics'){
    }
  } else if(appparams[0]=='acc'  && (appparams[1]=='respondacc' || appparams[1]=='rmkey')){
    if(appparams[1]=='respondacc'){
      account.worker(req,res,process.env);
    } else if(appparams[1]=='rmkey'){
      account.rmkeyhandle(req,res,process.env);
    }
  } else if(appparams[0]=='s'){
    apihandler.shortlink(appparams[1],res,process.env);
  } else if(appparams[0]=='p' && (appparams.length>1 || Object.keys(req.query).length>0)){
    pl=await apihandler.proxylink(req.params[0],req,res,process.env);
    apihandler.proxyanalytics(pl);
  } else if(appparams[0]=='k'){
    res.header('content-type', 'text/html');
    res.render('a.html');
  } else if(appparams[0]=='manifest.json'){
    res.header('content-type', 'application/json');
    res.send(process.env.manifestjson);   
  } else if(appparams[0]=='feed.rss'){
    res.header('content-type', 'application/rss+xml');
    res.send(appmodule.rssfeedcreate());
  } else{
    jsquery=appmodule.jsquery(res);
    if(process.env.manifestpresent=='y'){manifestvar='<link rel="manifest" href="/manifest.json" />';} else {manifestvar='';}
    res.render('index.min.html',{htmltitle: process.env.title, jsquery: jsquery, manifestvar: manifestvar});
  }
} 
app.all('*', (req, res) => {
  apphandle(req,res);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {console.log(`App running at ${port}`);});