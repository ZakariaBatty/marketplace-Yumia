const Order = require('../models/order.model');
// require validations
const { orderValidation } = require('../validations/validations');

// insert order
const NewOrder = async (req, res) => {
  // validate error
  const { error } = orderValidation(req.body);
  if (error) res.status(400).json({ error: error.details[0].message });
  const { fuulName, product, quantity, price, total, status } = req.body;
  const order = new Order({
    fuulName,
    product,
    quantity,
    price,
    total,
    status,
  });
  try {
    const saveOrder = await order.save();
    res.json({ error: null, order: saveOrder });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// get ALL Orders
const getAllOrders = async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json({ order: order });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// update order
const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id);
    order.status = await req.body.status;
    save = await category.save();
    res.status(200).json({ message: 'updated' });
    // check if error
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = {
  updateOrder,
  getAllOrders,
  NewOrder,
};
