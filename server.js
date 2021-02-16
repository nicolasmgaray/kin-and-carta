require("dotenv").config();
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const errorMiddleware = require("./middleware/error");
require("express-async-errors");
const mainRouter = require("./controllers");
const app = require("express")();

// Configure middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use("/api", mainRouter);
app.use(errorMiddleware);

// Connect to DB and Start the server
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
  (err) => {
    if (err) return console.log("Error connecting to the DB");
    app.listen(process.env.PORT || 3000, () => console.log("Service started"));
  }
);
