const fs = require("fs");

// Write a js function to read the context of the
// file using fs module

// result: hello this is Ankit from hello.txt

fs.readFile("hello.txt", "UTF-8", (err, data) => {
  console.log(data);
});
