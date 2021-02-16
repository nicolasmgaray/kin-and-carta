var log = require("../lib/logger");

process.on("uncaughtException", (err) => {
  log(err);
});

process.on("unhandledRejection", (err) => {
  log(err);
});

module.exports = function (err, req, res, next) {
  res.status(500).send("Unexpected Error");
  log(err);
};
