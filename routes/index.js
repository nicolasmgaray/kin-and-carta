const router = require("express").Router();
const contactRouter = require("./contact.routes");

router.use("/contact", contactRouter);

module.exports = router;
