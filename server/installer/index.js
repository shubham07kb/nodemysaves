const mongo=require('mongodb');
const nodemailer = require('nodemailer');
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./server/localstorage');
const MongoClient = mongo.MongoClient;
function connectmongo(url,res){
    url=url.trim();
    url=url.replace(' ','+');
    if(url!='' && (url.startsWith('mongodb://') || url.startsWith('mongodb+srv://'))){
        console.log(url);
        MongoClient.connect(url, function(err, db) {
            if (err) {console.log(err); res.send('{"statcode":"0" , "stat":"Error", "error":"Connection Error: Failed to connect to MongoDB"}');};
            console.log("Database created!");
            localStorage.setItem('installstate', 'b');
            localStorage.setItem('dbtype', 'mongo');
            localStorage.setItem('mongostr', url);
            res.send('{"statcode":"1" , "stat":"Succes", "code":"'+localStorage.getItem('installstate')+'"}');
        });
    } else{
        res.send('{"statcode":"0" , "stat":"Error", "error":"Connection Error: Empty URL or Invalid URL"}');
    }
}
function connectmail(){
    
}
module.exports={
    connectmongo: connectmongo,
    connectmail: connectmail
}