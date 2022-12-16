const jshandler=require('../modules/jshandler');
const webmaker=require('../modules/webmaker');
const installer=require('../modules/installer');
const minify=require('../modules/minify');
module.exports = {
    jsquery: jshandler.jsquery,
    jsscript: jshandler.jsscript,
    rssfeedcreate: webmaker.rssfeedcreate,
    minify: minify.doing,
    installer: installer.install
}