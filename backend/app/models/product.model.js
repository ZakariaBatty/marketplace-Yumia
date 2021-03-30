const mongoose = require('mongooose');
const { ObjectId } = mongoose.Schema;

// create schema

const Product = new mongoose.Schema(
  {
    titleProduit: { type: String, required: true },
    category_id: { type: ObjectId, ref: 'categories' },
    quantity: { type: Number, required: true },
    description: { type: String },
    shortDesc: { type: String },
    oldPrice: { type: Float },
    price: { type: Float, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('products', Product);
