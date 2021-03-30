const Product = require('../models/product.model');

// add New Product
const addNewProduct = async (req, res) => {
  // validation error
  const { error } = productValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const {
    titleProduit,
    category_id,
    quantity,
    description,
    shortDesc,
    oldPrice,
    price,
  } = req.body;
  // insert product
  const product = new Product({
    titleProduit,
    category_id,
    quantity,
    description,
    shortDesc,
    oldPrice,
    price,
  });

  try {
    const savedProduct = await product.save();
    res.json({ error: null, product: savedProduct });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// updated Product
const updatedProdcut = async (req, res) => {
  try {
    // updated Product
    const id = req.body;
    product_id;
    const product = await Product.updated(
      { ...req.body },
      { where: { _id: id } }
    );
    res.status(200).json({ product: product, message: 'updated' });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// deleted product

const deletedProduct = async (req, res) => {
  try {
    const product = await Prodcut.findByIdAndDelete(req.params.id);
    save = await product.save();
    res.status(200).json({ message: 'prodcut deleted' });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// get One Product By Id

const getProductById = (req, res, next, id) => {
  Product.findById(id)
    .populate('image', '_id name')
    .exec((err, product) => {
      if (err || !product) res.status(400).json({ message: err });
      req.status(200).json(product);
      next();
    });
};

// get all product
const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ product: product });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = {
  getProductById,
  deletedProduct,
  updatedProdcut,
  addNewProduct,
  getAllProduct,
};
