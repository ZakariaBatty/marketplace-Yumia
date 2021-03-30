const Categorie = require('../models/categorie.model');
const  categoryValidation  = require('../validations/validations');

// add Categorie
const addNewCategory = async (req, res) => {
  //validation error
  const { error } = categoryValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  // New Categororie
  const categorie = new Categorie({ ...req.body });
  try {
    const saved = await categorie.save();
    res.json({ error: null, categorie: saved });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// get all category
const getAllCategory = async (req, res) => {
  try {
    const category = await Categorie.find();
    res.status(200).json({ category: category });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// update category

const updateCategory = async (req, res) => {
  try {
    // find category
    const category = await Categorie.findByIdAndUpdate(req.params.id);
    // upadte title
    category.title = await req.body.title;
    // seve
    save = await category.save();
    res.status(200).json({ message: 'updated' });
    // check if error
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// deleted category

const deletedCategory = async (req, res) => {
  try {
    const category = await Categorie.findByIdAndDelete(req.params.id);
    save = await category.save();
    res.status(200).json({ message: 'category deleted' });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = {
  addNewCategory,
  getAllCategory,
  updateCategory,
  deletedCategory,
};
