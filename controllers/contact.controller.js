const ObjectId = require("mongoose").Types.ObjectId;
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
  if (!ObjectId.isValid(id)) return res.status(400).send("Invalid ID");
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

const getContactById = async ({ params }, res) => {
  const { id } = params;
  if (!ObjectId.isValid(id)) return res.status(400).send("Invalid ID");
  const result = await ContactService.getContactById(id);
  return res.json(result);
};

const getContactsByLocation = async ({ params }, res) => {
  const { location } = params;
  const result = await ContactService.getContactsByLocation(location);
  return res.json(result);
};

const deleteContact = async ({ params }, res) => {
  const { id } = params;
  if (!ObjectId.isValid(id)) return res.status(400).send("Invalid ID");
  const result = await ContactService.deleteContact(id);
  return res.json(result);
};

module.exports = {
  addContact,
  updateContact,
  getContactById,
  deleteContact,
  searchContact,
  getContactsByLocation,
};
