const Joi = require("joi");

const productSchema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.num().min(3).required(),
    size: Joi.string(),
  });


  router.products("/products", (req, res) => {
  const { error, value } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }

  const created = services.create(value);

  res.status(201).json(created);
});

module.exports = router;
