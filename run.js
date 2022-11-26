const { dbname } = require('./server/modules/db/mongo.js');
const db = require('./server/modules/db/mongo.js');
let {a,b}=db.connect();
console.log(db.display(a));
db.close(b);