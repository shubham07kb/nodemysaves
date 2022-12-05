const fs = require('fs');
const readline = require('readline');
function doing() {
  htmlloc = process.env.rootpath + "/host/html/";
  cssloc = process.env.rootpath + "/host/css/";
  jsloc = process.env.rootpath + "/host/js/";
  fs.readdirSync(htmlloc).forEach(filee => {
    if (filee.endsWith(".html") && !filee.endsWith(".min.html")){
      const fn=filee.substring(0,filee.length-5);
      const file = readline.createInterface({
        input: fs.createReadStream(htmlloc + filee),
        output: process.stdout,
        terminal: false
      });
      if (fs.existsSync(htmlloc+fn+".min.html")) {
        fs.unlinkSync(htmlloc+fn+".min.html");
      }
      file.on('line', (line) => {
        fs.appendFileSync(htmlloc + fn+'.min.html', line.replace(/[\n\r]/g, ' ').replace(/\s\s+/g, ' '));
      });
    }
  });
  fs.readdirSync(cssloc).forEach(filee => {
    if (filee.endsWith(".css") && !filee.endsWith(".min.css")){
      const fn=filee.substring(0,filee.length-4);
      const file = readline.createInterface({
        input: fs.createReadStream(cssloc + filee),
        output: process.stdout,
        terminal: false
      });
      if (fs.existsSync(cssloc+fn+".min.css")) {
        fs.unlinkSync(cssloc+fn+".min.css");
      }
      file.on('line', (line) => {
        fs.appendFileSync(cssloc + fn+'.min.css', line.replace(/[\n\r]/g, ' ').replace(/\s\s+/g, ' '));
      });
    }
  });
  fs.readdirSync(jsloc).forEach(filee => {
    if (filee.endsWith(".js") && !filee.endsWith(".min.js")){
      const fn=filee.substring(0,filee.length-3);
      const file = readline.createInterface({
        input: fs.createReadStream(jsloc + filee),
        output: process.stdout,
        terminal: false
      });
      if (fs.existsSync(jsloc+fn+".min.js")) {
        fs.unlinkSync(jsloc+fn+".min.js");
      }
      file.on('line', (line) => {
        fs.appendFileSync(jsloc + fn+'.min.js', line.replace(/[\n\r]/g, ' ').replace(/\s\s+/g, ' '));
      });
    }
  });
}
module.exports = {
  doing: doing
} 