const router = require("express").Router();
const contactController = require("../controllers/contact.controller");

// GET
router.get("/location/:location", contactController.getContactsByLocation);
router.get("/search", contactController.searchContact);
router.get("/:id", contactController.getContactById);

// POST
router.post("/", contactController.addContact);

// PUT
router.put("/:id", contactController.updateContact);

// DELETE
router.delete("/:id", contactController.deleteContact);

module.exports = router;
