const os = require("os");
const fs = require("fs");
const path = require("path");

const filePath = path.join("/content", "subfolder", "text.txt");
const base = path.basename(filePath);
const obsolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(path);
console.log(filePath);
console.log(base);
console.log(obsolute);
