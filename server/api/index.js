const ip = require('./ip');
const prepage = require('./pages/prepage');
const blogpage = require('./pages/blog');
const adminpage = require('./pages/admin');
const appstorepage = require('./pages/appstore');
const apppage = require('./pages/app');
const collectionpage = require('./pages/collection');
const projectpage = require('./pages/project');
const short = require('./shortlink');
const useragent = require('./useragent');
const proxylink = require('./proxylink');
module.exports = {
    userpraser: useragent.uapraser,
    getip: ip.getip,
    prepagehtml: prepage.html,
    blogpagehtml: blogpage.html,
    adminpagehtml: adminpage.html,
    appstorepagehtml: appstorepage.html,
    apppagehtml: apppage.html,
    collectionpagehtml: collectionpage.html,
    projectpagehtml: projectpage.html,
    prepagemeta: prepage.meta,
    blogpagemeta: blogpage.meta,
    adminpagemeta: adminpage.meta,
    appstorepagemeta: appstorepage.meta,
    apppagemeta: apppage.meta,
    collectionpagemeta: collectionpage.meta,
    projectpagemeta: projectpage.meta,
    shortlink: short.direct,
    shortlinkapi: short.api,
    proxylink: proxylink.direct
}