// const logger = require("./logger");

// var message = "hi";
// console.log(module);
// console.log(logger);
// logger.log(message);
const os = require("os");
const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");

// const emitter = new EventEmitter();
// console.log(emitter);
// console.log(EventEmitter);
// console.log(os);
// console.log(fs);

const Logger = require("./logger");
const log = new Logger();

// Register a listner
// log.on("messagedLogged", (e) => {
//   console.log("Listner called", e);
// });
// log.log("Message");
// const files = fs.readdirSync("./");
// // console.log(files);
// const files2 = fs.readdir("./", (err, file) => {
//   if (err) {
//     console.log(err);
//   } else {
//     // console.log(file);
//   }
// });

// const server = {
//   type: os.type(),
//   architecture: os.arch(),
//   uptime: os.uptime(),
//   totalMemory: os.totalmem(),
//   freeMemory: os.freemem(),
// };

// console.log(server);
const _ = require("lodash");

const items = [1, [2, [3, [4]], [5]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
