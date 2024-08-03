const http = require("http");
const qrcode = require("qrcode");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    qrcode.toDataURL("https://anix.to/home", (err, url) => {
      if (err) console.log(err);
      res.end(`<img src = ${url} />`);
    });
  })

  .listen(8000);

console.log("Application is running");
