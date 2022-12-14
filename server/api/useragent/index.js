const DeviceDetector= require('device-detector-js');
function uapraser(req, res) {
    var ua = req.headers['user-agent'];
    const deviceDetector = new DeviceDetector();
    const device = deviceDetector.parse(ua);
    return device;
}
module.exports = {
    uapraser: uapraser
}