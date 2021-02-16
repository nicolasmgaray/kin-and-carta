const router = require("express").Router();
const contactController = require("../controllers/contact.controller");

router.post("/", contactController.addContact);
router.get("/", contactController.getContacts);

module.exports = router;
