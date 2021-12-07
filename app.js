var express = require("./lib/express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("/a");
  res.send("respond with a resource");
});

router.get("/b", function (req, res, next) {
  res.send("respond with a resource");
});

var app = express();
app.use("/a", router);
console.log(app);
module.exports = app;
