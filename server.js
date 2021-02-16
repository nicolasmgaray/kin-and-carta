require("dotenv").config();
const app = require("express")();
require("express-async-errors");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const errorMiddleware = require("./middleware/error");
const mainRouter = require("./routes");

// Configure middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use("/api", mainRouter);
app.use((req, res) => res.status(404).send("Not found"));
app.use(errorMiddleware);

// Connect to DB and Start the server
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
  (err) => {
    if (err) return console.log("Error connecting to the DB", err);
    app.listen(process.env.PORT || 3000, () => console.log("Service started"));
  }
);
