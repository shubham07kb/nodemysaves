const ip = require('./ip');
const prepage = require('./prepage');
const short = require('./shortlink');
const useragent = require('./useragent');
module.exports = {
    userpraser: useragent.uapraser,
    getip: ip.getip,
    prepagehtml: prepage.html,
    prepagemeta: prepage.meta,
    shortlink: short.direct,
    shortlinkapi: short.api
}