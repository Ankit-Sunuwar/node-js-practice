const http = require("http");
const CC = require("currency-converter-lt");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const convert = (amount, from, to) => {
      const currencyConverter = new CC();
      currencyConverter
        .from(from)
        .to(to)
        .amount(Number(amount))
        .convert()
        .then((response) => {
          res.end(`${amount} ${from} is equal to ${response}`);
        });
    };

    convert("1", "USD", "NPR");
  })
  .listen(9000);

console.log("Application is running.");
