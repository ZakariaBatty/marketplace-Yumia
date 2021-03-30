const mongoose = require('mongoose');

const Order = mongoose.Schema(
  {
    fullname: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Float, required: true },
    total: { type: Number, required: true },
    status: { type: String, required: true, default: 'stock' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('orders', Order);
