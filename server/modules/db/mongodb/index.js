MongoClient = require('mongodb').MongoClient;
async function query(a,b,c,d){
  var db = await MongoClient.connect(c);
  var dbo =await db.db(d);
  return await dbo.collection(a).find(b).toArray();
}
async function insert(a,b,c,d){
  var db = await MongoClient.connect(c);
  var dbo =await db.db(d);
  try{
    var r=await dbo.collection(a).insertOne(b);
    return {status:'success',statcode:1,message:r};
  } catch(e){
    return {status:'error',statcode:0,message:e};
  }
}
async function del(a,b,c,d){
  var db = await MongoClient.connect(c);
  var dbo =await db.db(d);
  try{
    var r=await dbo.collection(a).deleteOne(b);
    return {status:'success',statcode:1,message:r};
  } catch(e){
    return {status:'error',statcode:0,message:e};
  }
}
module.exports = {
  query: query,
  insert: insert,
  del: del
};