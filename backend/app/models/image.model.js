const mongoose = require('mongooose');
const { ObjectId } = mongoose.Schema;

// create schema

const Image = new mongoose.Schema(
  {
    product_id: { type: ObjectId, ref: 'products' },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('images', Image);
