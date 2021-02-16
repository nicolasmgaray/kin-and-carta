var log = require("../lib/logger");

process.on("uncaughtException", (err) => {
  log(err);
});

process.on("unhandledRejection", (err) => {
  log(err);
});

module.exports = function (err, req, res, next) {
  log(err);
  res.status(500).json({ error: err.message });
};
