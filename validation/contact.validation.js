const Joi = require("@hapi/joi");

const newContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  company: Joi.string(),
  profilePicture: Joi.string(),
  birthdate: Joi.string(),
  workPhone: Joi.string(),
  personalPhone: Joi.string(),
  address: Joi.string(),
});

const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  company: Joi.string(),
  profilePicture: Joi.string(),
  birthdate: Joi.string(),
  workPhone: Joi.string(),
  personalPhone: Joi.string(),
  address: Joi.string(),
});

const searchContactSchema = Joi.object({
  email: Joi.string(),
  phone: Joi.string(),
}).or("email", "phone");

module.exports = { newContactSchema, updateContactSchema, searchContactSchema };
