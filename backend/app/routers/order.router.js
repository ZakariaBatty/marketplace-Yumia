const express = require('express');
const router = express.Router();

const { updateOrder, getAllOrders, NewOrder } = require('../models/order');

router.post('/getAllOrders', getAllOrders);

module.exports = router;
