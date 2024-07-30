const http = require("http");
// const fs = require("fs");
const os = require("os");

http
  .createServer((req, res) => {
    const ramInfo = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    res.writeHead(200, { "Content-Type": "application/json" });
    // Logic to check RAM in GB?
    res.end(
      JSON.stringify({
        RAM: ramInfo,
      })
    );
  })
  .listen(8000);
console.log("Running program");
