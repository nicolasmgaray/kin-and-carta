const Contact = require("../models/contact.model");

const addContact = async (data) => {
  return await Contact.create(data);
};

const getContacts = () => {};

module.exports = { addContact, getContacts };
