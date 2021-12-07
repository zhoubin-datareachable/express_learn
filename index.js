var app = require("./app");
var http = require("http");

var port = "3000";
app.set("port", port);
var server = http.createServer(app);
server.listen(port);

// const merge = require("./m");

// var app = function (req, res, next) {
//   //
// };

// const thing = {
//   name: "li",
//   age: "2",
// };

// merge(app, thing, false);

// console.dir(app);
// console.log(thing);
// const events = require("events");
// console.log(events.EventEmitter.prototype);

// const obj = {
//   name: "zs",
// };
// const me = Object.create(obj, {
//   age: {
//     writable: true,
//     configurable: true,
//     value: 2,
//     enumerable: true,
//   },
// });
// console.log(me);
