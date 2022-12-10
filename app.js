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
const jshandler      = require('./server/modules/jshandler');
const installer      = require('./server/modules/installer');
const minify         = require('./server/modules/minify');
const prepage        = require('./server/api/prepage');
const ip             = require('./server/api/ip');
const short          = require('./server/api/shortlink');
const account        = require('./server/acc');
process.env.rootpath=__dirname;
const uuid=require('uuid');
// for(let i=0;i<os.cpus().length;i++){ 
//   console.log('CPU'+i+' : '+os.cpus()[i].model);
//  }

installer.install('config.json');

const replacerFunc   = ()=>{const visited=new WeakSet();return (key, value)=>{if(typeof value==="object" && value!==null){if(visited.has(value)){return;}visited.add(value);}return value;};};
const port           = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.set('views', path.join(__dirname, 'host/html'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'host/static')));
app.use('/content', express.static(path.join(__dirname, 'host')));
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
app.use(cors());  //5 */1 * * *  ,  0 0 0-23 * * *  ,  "cronpass": "Shub"
app.use(urlencodedParser);
app.use(compression());
app.use(cookieParser(httpOnly=false));
app.use(session({
  secret: process.env.session_key,
  resave: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  saveUninitialized: true,
}));

async function apphandle(req,res){
  appparams=req.params[0].split('/');
  appparams.shift();
  reqhostname="https://"+req.hostname;
  if(appparams[0]=='mo'){
    res.send(reqhostname);
  }if(appparams[0]=='app.js'){
    jsscript=jshandler.jsscript(req.query,res,reqhostname);
  } else if(appparams[0]=='minify'){
    minify.doing();
    res.send('Minify done');
  } else if(appparams[0]=='server' && (appparams[1]=='cron' || appparams[1]=='req')){
    res.set('Content-Type', 'application/json');
    if(appparams[1]=='cron'){
      res.send(JSON.stringify(req, replacerFunc()));
    } else if(appparams[1]=='req'){
      res.send(JSON.stringify(req, replacerFunc()));
    }
  } else if(appparams[0]=='api' && ((appparams[1]=='prepage' && (appparams[2]=='html' || appparams[2]=='meta') && appparams[3]!='' && appparams[3]!=undefined) || (appparams[1]=='get' && (appparams[2]=='ip' || (appparams[2]=='ipdata'))) || (appparams[1]=='shortlink' && appparams[2]!='' && appparams[2]!=undefined))){
    if(appparams[1]=='prepage'){
      if(appparams[2]=='html'){
        prepage.html(appparams[3],req,res);
      } else if(appparams[2]=='meta'){
        prepage.meta(appparams[3],req,res);
      }
    } else if(appparams[1]=='get'){
      if(appparams[2]=='ip'){
        res.header('Content-Type', 'application/json');
        res.send(ip.getip(req));
      } else if(appparams[2]=='ipdata'){
        ip.ipdata(req,res);
      }
    } else if(appparams[1]=='shortlink'){
      short.api(appparams[2],res,process.env);
    }
  } else if(appparams[0]=='acc'  && (appparams[1]=='respondacc')){
    account.worker(req,res,process.env);
  } else if(appparams[0]=='s'){
    short.direct(appparams[1],res,process.env);
  } else {
    jsquery=jshandler.jsquery(res);
    res.render('index.min.html',{htmltitle: process.env.title, jsquery: jsquery});
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

http.listen(port, () => {
  console.log(`App running at ${port}`);
});