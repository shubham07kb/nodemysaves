//requires by node_modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const os = require('os');
const session = require('express-session');
const cors = require('cors');
let cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const LocalStorage = require('node-localstorage').LocalStorage;


//requires by local files         mongodb+srv://Shubham:Shubham@mysaves.wj18yun.mongodb.net/?retryWrites=true
const jshandler = require('./server/modules/jshandler');
const installer = require('./server/installer');


//functions
const replacerFunc = () => {
  const visited = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (visited.has(value)) {
        return;
      }
      visited.add(value);
    }
    return value;
  };
};


//environment variables
process.env.runstat=3;  // 0-error 1=running, 2=maintaince, 3=installing
process.env.webtitle='My Saves';
process.env.mongohost='';  //mongo host url


//express app setup
const app = express();
const port = process.env.PORT || 3000;
localStorage = new LocalStorage('./server/localstorage');
localStorage.clear();
var urlencodedParser = bodyParser.urlencoded({ extended: false })  


//middleware
app.use(cors());  //5 */1 * * *  ,  0 0 0-23 * * *  ,  "cronpass": "Shub"
app.use(urlencodedParser);
app.use(cookieParser());
app.use(session({
  secret: 'mysavesasecret', //please change this to something more secure
  resave: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  saveUninitialized: true,
}));
app.set('views', path.join(__dirname, 'host/html'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'host/static')));
app.use('/content', express.static(path.join(__dirname, 'host')));



//routes
app.all('*', async (req, res) => {
  if(req.params[0]=='/app.js'){
    jsscript=jshandler.jsscript(req.query,res);
    
  } else if(req.params[0]=='/installsetup'){
    res.set('Content-Type', 'application/json');
    if(process.env.runstat==3){
      if(req.body.a=='startbtn'){
        res.send('{"statcode":"1" , "stat":"Succes", "code":"'+localStorage.getItem('installstate')+'"}')
      } else if(req.body.a=='mongoenter' && req.body.mongostring!=undefined){
        installer.connectmongo(req.body.mongostring,res);
      } else if(req.body.a=='sqlenter'){
        
      } else if(req.body.a=='mbse'){
        installer.connectmailwithservice(req.body,res);
      } else if(req.body.a=='mbhe'){
        installer.connectmailwithhost(req.body,res);
      } else{
        res.send('{"statcode":"0" , "stat":"Failed", "error":"Parameter Error"}');
      }
    } else{
      res.send('{"statcode":"0" , "stat":"Failed", "error":"Installed or in maintaince mode or error mode"}');
    }
  } else if(req.params[0]=='/server/cron'){
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(req, replacerFunc()));
  } else if(req.params[0]=='/server/req'){
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(req, replacerFunc()));
  } else{
    jsquery=jshandler.jsquery(res);
    res.render('index.html',{htmltitle: process.env.webtitle, jsquery: jsquery});
  }
});


//server
app.listen(port, () => {
  console.log(`App running at ${port}`)
});