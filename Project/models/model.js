const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: Number, required: true },
});

const model = mongoose.model('User', userSchema);
module.exports = model;
