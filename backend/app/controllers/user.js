require('dotenv').config({ path: './app/config/.env' });
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

// register
const register = (req, res) => {
  // searsh about user
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err || user) res.status(400).json({ message: 'email déja execute' });
    // crybpt password
    const salt = bcrypt.genSalt(10);
    const hashdPassword = bcrypt.hash(req.body.password, salt);
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      telephone: req.body.telephone,
      ville: req.body.ville,
      salt,
      password: hashdPassword,
      role: req.body.role,
    });
    // save user and return user if don't error
    user.save((err, user) => {
      if (err) res.status(400).json({ error: err });
      user.password = undefined;
      user.salt = undefined;
      res.status(200).json(user);
    });
  });
};

// auth

const signin = (req, res) => {
  // get user for check if find
  User.findOne({ email: req.body.email }, (err, user) => {
    // check if err or !user
    if (err || !user)
      res.status(400).json({ error: err, message: 'Acune donnée trovée' });
    // check if password correct
    const correct = bcrypt.compareSync(req.body.password, user.password);
    if (!correct)
      res.status(400).json({ error: 'Email and password doesnot match' });
    // genér token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // stock token in cookie
    res.cookie('t', token, {
      expires: new Date() + 9999,
    });
    return res.json({
      token,
      user,
    });
  });
};

//getAlluser
const getAlluser = async (req, res) => {
  try {
    const user = await User.find();
    res
      .status(200)
      .json({ user: user })
      .select('firstName fastName email telephone ville role');
  } catch (error) {
    res.status(200).json({ error: error });
  }
};

//getAllliveror
const getAllliveror = async (req, res) => {
  try {
    const user = await User.find({ where: { role: 'liveror' } });
    res
      .status(200)
      .json({ user: user })
      .select('firstName fastName email telephone ville role');
  } catch (error) {
    res.status(200).json({ error: error });
  }
};

module.exports = {
  register,
  getAlluser,
  signin,
  getAllliveror,
};
