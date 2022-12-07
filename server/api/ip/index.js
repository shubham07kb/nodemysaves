function getip(req) {
  if (typeof req.headers['cf-connecting-ip'] == 'undefined') {
    ip = req.ip;
  } else {
    ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  }
  return '{"stat":"done","ip":"' + ip + '"}';
}
module.exports = {
  getip: getip,
};