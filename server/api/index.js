const ip = require('./ip');
const prepage = require('./pages/prepage');
const short = require('./shortlink');
const useragent = require('./useragent');
const proxylink = require('./proxylink');
module.exports = {
    userpraser: useragent.uapraser,
    getip: ip.getip,
    prepagehtml: prepage.html,
    prepagemeta: prepage.meta,
    shortlink: short.direct,
    shortlinkapi: short.api,
    proxylink: proxylink.direct
}