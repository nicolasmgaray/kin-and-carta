require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? ".env.testing" : ".env",
});
const app = require("./app");
require("express-async-errors");
const mongoose = require("mongoose");

// Connect to DB and Start the server
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
  (err) => {
    if (err) return console.log("Error connecting to the DB", err);
    app.listen(process.env.PORT || 3000, () => console.log("Service started"));
  }
);
