const { reset } = require("nodemon");
const ContactService = require("../services/contact.services");
const {
  newContactSchema,
  updateContactSchema,
  searchContactSchema,
} = require("../validation/contact.validation");

const addContact = async ({ body }, res) => {
  const { error, value: contact } = newContactSchema.validate(body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  const result = await ContactService.addContact(contact);
  return res.json(result);
};

const updateContact = async ({ params, body }, res) => {
  const { id } = params;
  const { error, value: contact } = updateContactSchema.validate(body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  const result = await ContactService.updateContact(id, contact);
  return res.json(result);
};

const searchContact = async ({ query }, res) => {
  const { error, value: searchParams } = searchContactSchema.validate(query);
  if (error) return res.status(400).json({ error: error.details[0].message });
  const result = await ContactService.searchContact(searchParams);
  return res.json(result);
};

const getContact = async ({ params }, res) => {
  const { id } = params;
  const result = await ContactService.getContact(id);
  return res.json(result);
};

const deleteContact = async ({ params }, res) => {
  const { id } = params;
  const result = await ContactService.deleteContact(id);
  return res.json(result);
};

module.exports = {
  addContact,
  updateContact,
  getContact,
  deleteContact,
  searchContact,
};
