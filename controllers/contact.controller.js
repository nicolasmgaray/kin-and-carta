const { reset } = require("nodemon");
const ContactService = require("../services/contact.services");
const { newContactSchema } = require("../validation/contact.validation");

const addContact = async ({ body }, res) => {
  const { error, value: contact } = newContactSchema.validate(body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  const result = await ContactService.addContact(contact);
  return res.json(result);
};

const getContacts = () => {};

module.exports = { addContact, getContacts };
