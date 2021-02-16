const Joi = require("@hapi/joi");

const newContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string(),
  company: Joi.string(),
  profilePicture: Joi.string(),
  birthdate: Joi.string(),
  workPhone: Joi.string(),
  personalPhone: Joi.string(),
  address: Joi.string(),
});

module.exports = { newContactSchema };
