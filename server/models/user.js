var mongoose = require('mongoose');

/**
 * User Schema
 */
var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username not provided "],
  },
  email: {
    type: String,
    unique: [true, "email already exists in database!"],
    lowercase: true,
    trim: true,
    required: [true, "email not provided"],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: '{VALUE} is not a valid email!'
    }
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
/*  medicine: {
   type: mongoose.Schema.Types.ObjectId,
    ref: "medicine"
  } */
});

module.exports = mongoose.model('User', userSchema);