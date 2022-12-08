MongoClient = require('mongodb').MongoClient;
async function query(a,b,c,d){
  var url = c;
  var db = await MongoClient.connect(url);
  var dbo =await db.db(d);
  return await dbo.collection(a).find(b).toArray();
}
module.exports = {
  query: query
};