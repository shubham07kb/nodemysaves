const fs = require('fs');
const readline = require('readline');
async function htmlmin(htmlloc) {
  fs.readdirSync(htmlloc).forEach(async (filee) => {
    if (filee.endsWith(".html") && !filee.endsWith(".min.html")) {
      const fn = filee.substring(0, filee.length - 5);
      const file = readline.createInterface({ input: fs.createReadStream(htmlloc + filee), output: process.stdout, terminal: false });
      if (fs.existsSync(htmlloc + fn + ".min.html")) {
        fs.unlinkSync(htmlloc + fn + ".min.html")
      }
      file.on('line', async (line) => {
        fs.appendFileSync(htmlloc + fn + '.min.html', line.replace(/\s\s+/g, ' '));
      });
    }
  });
}
async function cssmin(cssloc) {
  fs.readdirSync(cssloc).forEach(async (filee) => {
    if (filee.endsWith(".css") && !filee.endsWith(".min.css")) {
      const fn = filee.substring(0, filee.length - 4);
      if (fs.existsSync(cssloc + fn + ".min.css")) {
        fs.unlinkSync(cssloc + fn + ".min.css")
      }
      const file = readline.createInterface({ input: fs.createReadStream(cssloc + filee), output: process.stdout, terminal: false });
      file.on('line', async (line) => {
        fs.appendFileSync(cssloc + fn + '.min.css', line.replace(/\s\s+/g, ' '));
      });
    }
  });
}
async function jsmin(jsloc) {
  fs.readdirSync(jsloc).forEach(async (filee) => {
    if (filee.endsWith(".js") && !filee.endsWith(".min.js")) {
      const fn = filee.substring(0, filee.length - 3);
      if (fs.existsSync(jsloc + fn + ".min.js")) {
        fs.unlinkSync(jsloc + fn + ".min.js")
      }
      const file = readline.createInterface({ input: fs.createReadStream(jsloc + filee), output: process.stdout, terminal: false });
      file.on('line', async (line) => {
        fs.appendFileSync(jsloc + fn + '.min.js', line.replace(/\s\s+/g, ' '));
      });
    }
  });
}

async function doing(res,prc) {
  aaa = prc.rootpath;
  await htmlmin(aaa + "/host/html/");
  await htmlmin(aaa + "/host/html/acc/");
  await htmlmin(aaa + "/host/html/app/");
  await htmlmin(aaa + "/host/html/web/");
  await cssmin(aaa + "/host/css/");
  await cssmin(aaa + "/host/css/acc/");
  await cssmin(aaa + "/host/css/app/");
  await cssmin(aaa + "/host/css/web/");
  await jsmin(aaa + "/host/js/");
  await jsmin(aaa + "/host/js/acc/");
  await jsmin(aaa + "/host/js/app/");
  await jsmin(aaa + "/host/js/web/");
  await jsmin(aaa + "/host/js/lib/");
  res.send('Minify done');
}
module.exports = {
  doing: doing
} 