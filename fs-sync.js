const fs = require("fs");
console.log("start");
const first = fs.readFileSync("../content/first.txt", "utf8");
const second = fs.readFileSync("../content/second.txt", "utf8");
fs.writeFileSync(
  "../content/result-sync.txt",
  `Here is the result: ${first} and: ${second}`,
  { flag: "a" }
);

// console.log(first, second);
console.log("Done with this task");
console.log("Starting the next one");
