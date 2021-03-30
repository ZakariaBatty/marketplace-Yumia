const mongoose = reaquire('mongoose');

const User = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    telephone: { type: String, required: true },
    ville: { type: String, required: true, trim: true },
    salt: String,
    passord: { type: String, required: true },
    role: { type: String, required: true, default: 'user' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('users', User);