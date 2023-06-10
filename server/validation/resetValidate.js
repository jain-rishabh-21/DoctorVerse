const Joi = require('joi');

const changePasswordSchema = Joi.object().keys({
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().min(7).max(12).required()
});

const forgotPasswordSchema = Joi.object().keys({
  email: Joi.string().email().required()
});

const resetPasswordSchema = Joi.object().keys({
  password: Joi.string().min(7).max(12).required()
});

module.exports = {
  changePasswordSchema,
  forgotPasswordSchema,
  resetPasswordSchema
};
