const Contact = require("../models/contact.model");

const addContact = async (data) => {
  return await Contact.create(data);
};

const searchContact = async ({ email, phone }) => {
  const query = [];
  if (email) query.push({ email: email });
  if (phone) query.push({ personalPhone: phone }, { workPhone: phone });
  return await Contact.findOne().or(query);
};

const getContactsByLocation = async (location) => {
  return await Contact.find({ address: { $regex: location, $options: "i" } });
};

const updateContact = async (id, data) => {
  return await Contact.findByIdAndUpdate(id, data, { new: true });
};

const deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};

const getContactById = async (id) => {
  return await Contact.findById(id);
};

module.exports = {
  addContact,
  updateContact,
  deleteContact,
  getContactById,
  searchContact,
  getContactsByLocation,
};
