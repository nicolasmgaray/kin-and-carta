const router = require("express").Router();
const contactController = require("../controllers/contact.controller");

router.post("/", contactController.addContact);
router.get("/:id", contactController.getContact);
router.get("/", contactController.searchContact);
router.put("/:id", contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

module.exports = router;
