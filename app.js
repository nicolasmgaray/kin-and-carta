require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? ".env.testing" : ".env",
});
const app = require("express")();
require("express-async-errors");
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

module.exports = app;
