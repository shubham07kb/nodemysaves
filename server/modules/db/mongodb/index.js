MongoClient = require('mongodb').MongoClient;

function connectshow(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        dbo = db.db("mysaves");
        return {dbo,db};
    });
}

function display(dbo){
    console.log('displaying');
    dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
    });
}


function dbclose(db){
    console.log('closing');
    db.close();
}

module.exports={
    'connect': connectshow,
    'display': display,
    'close': dbclose,
    'dbnamewala': 'mysaves'
};