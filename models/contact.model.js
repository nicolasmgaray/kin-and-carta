const mongoose = require("mongoose");

/*
The contact record should represent the following information: name, company, profile
image, email, birthdate, phone number (work, personal), and address.
*/

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  company: { type: String },
  profilePicture: { type: String },
  birthdate: { type: Date },
  workPhone: { type: String },
  personalPhone: { type: String },
  address: { type: String },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
