const path=require('path');
const db=require(path.join("../../modules/db"));
async function api(s,res,prc){
    console.log(prc.mongostring);
    q={sn:s};
    p=await db.query(prc,'shortlink',q);
    res.header('Content-Type', 'application/json');
    if(p.length==0){
        res.send('{"stat":"error","statcode":0,"msg":"No shortlink found"}')
    } else if(p.length>1){
        res.send('{"stat":"error","statcode":0,"msg":"Multiple shortlinks found"}')
    } else{
        res.send('{"stat":"success","statcode":1,"url":"'+p[0].url+'"}');
    }
}
async function direct(s,res,prc){
    q={sn:s};
    console.log(prc.mongostring);
    p=await db.query(prc,'shortlink',q);
    if(p.length==0){
    res.redirect('/error?msg=No shortlink found');
    } else if(p.length>1){
        res.redirect('/error?msg=Multiple shortlinks found');
    } else{
       res.redirect(p[0].url);
    }
}
module.exports={
    direct: direct,
    api: api
}