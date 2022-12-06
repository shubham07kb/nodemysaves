function getip(req) {
  if (typeof req.headers['cf-connecting-ip'] == 'undefined') {
    ip = req.ip;
  } else {
    ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  }
  return '{"stat":"done","ip":"' + ip + '"}';
}
async function ipdata(req,res){
  res.header('Content-Type', 'application/json');
  if(req.query.ip!=undefined && req.query.ip!=''){
    res.send(await fetch('http://ip-api.com/json/'+req.query.ip+'?fields=66846719').then(response => response.json()).then(data => data.ip));
  } else{
    res.send('{"stat":"error","msg":"ip not found"}');
  }
}
module.exports = {
  getip: getip,
  ipdata: ipdata
};