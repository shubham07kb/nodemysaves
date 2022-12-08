const mongo = require('./mongodb');
const mysql = require('./mysql');
async function query(prc,a,b){
  const dbtype = prc.env.dbtype;
  if (dbtype == 'mongo') {
    return await mongo.query(a,b,prc.env.mongostring,prc.env.dbname);
  } else if (dbtype == 'mysql') {

  }
}
module.exports = {
  query: query,
}