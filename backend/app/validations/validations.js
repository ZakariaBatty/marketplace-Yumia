const Joi = require('joi');

const categoryValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(10).max(150),
  });
  return schema.validate(data);
};

module.exports = { categoryValidation };
