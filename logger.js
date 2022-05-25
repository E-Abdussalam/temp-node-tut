const EventEmitter = require("events");

var url = "http://mylogger.oi/log";
class Logger extends EventEmitter {
  log(message) {
    // send http request
    console.log(message);
    // Raise an event
    this.emit("messagedLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
