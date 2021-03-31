const express = require('express');
const router = express.Router();

const {
  addNewCategory,
  getAllCategory,
  updateCategory,
  deletedCategory,
} = require('../controllers/categorie');

router.post('/add/Category', addNewCategory);


module.exports = router;
