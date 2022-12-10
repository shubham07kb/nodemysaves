const mongo = require('./mongodb');
const mysql = require('./mysql');
async function query(prc,a,b){
  const dbtype = prc.dbtype;
  if (dbtype == 'mongo') {
    return await mongo.query(a,b,prc.mongostring,prc.dbname);
  } else if (dbtype == 'mysql') {

  }
}
async function insert(prc,a,b){
  const dbtype = prc.dbtype;
  if (dbtype == 'mongo') {
    return await mongo.insert(a,b,prc.mongostring,prc.dbname);
  } else if (dbtype == 'mysql') {

  }
}
async function del(prc,a,b){
  const dbtype = prc.dbtype;
  if (dbtype == 'mongo') {
    return await mongo.del(a,b,prc.mongostring,prc.dbname);
  } else if (dbtype == 'mysql') {
    
  }
}
module.exports = {
  query: query,
  insert: insert,
  del: del
}