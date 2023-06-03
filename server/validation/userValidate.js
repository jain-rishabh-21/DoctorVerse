const Joi = require('joi');

const userLoginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(7).max(12).required()
});

const userRegisterSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(7).max(12).required(),
    name: Joi.string().required()
});

const userUpdateSchema = Joi.object().keys({
    address: Joi.string().required(),
    phone: Joi.number().min(10).required(),
    name: Joi.string().required()
});

module.exports = {
    userLoginSchema,
    userRegisterSchema,
    userUpdateSchema
};