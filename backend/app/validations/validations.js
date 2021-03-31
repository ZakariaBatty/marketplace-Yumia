const Joi = require('joi');

// category Validation
const categoryValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3).max(150),
  });
  return schema.validate(data);
};

// category order
const orderValidation = (data) => {
  const schema = Joi.object({
    fullname: Joi.string().required().min(3).max(30),
    product: Joi.string().required().min(3).max(150),
    quantity: Joi.number().required(),
    price: Joi.float().required(),
    total: Joi.float().required(),
    status: string().required(),
  });
  return schema.validate(data);
};

// product order
const productValidation = (data) => {
  const schema = Joi.object({
    titleProduit: Joi.string().required().min(3).max(50),
    category_id: Joi.integer().required(),
    quantity: Joi.number().required(),
    description: string().required(),
    shortDesc: string().required(),
    oldPrice: Joi.float().required(),
    price: Joi.float().required(),
  });
  return schema.validate(data);
};

// user order
const userValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(3).max(50),
    lastName: Joi.string().required().min(3).max(50),
    email: Joi.string().email(),
    telephone: Joi.number().required(),
    ville: string().required(),
    passord: string().required(),
    role: string().required(),
  });
  return schema.validate(data);
};

module.exports = { categoryValidation ,userValidation, productValidation,orderValidation};
