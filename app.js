const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const express = require('express');
const session = require('express-session');


const app = express();
const port = process.env.PORT || 3000;


app.use(session({
  secret: 'mysavesasecret', //please change this to something more secure
  resave: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  saveUninitialized: true,
}));


app.set('views', path.join(__dirname, 'host/html'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/app/*', (req, res) => {
  res.send('in app');
});
app.get('*', (req, res) => {
  if(req.url=='/favicon.ico'){
    const ico=fs.readFileSync(path.join(__dirname, 'host/img/icon/ico.png'));
    res.send(ico);
  } else {
    res.status=200;
    res.render('index.html',{js: 'OK'});
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});