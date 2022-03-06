const mongoose = require('mongoose');
const { isEmail } = require('validator');


const userSchema = new mongoose.Schema({
  userName : {
    type: String,
    unique: true,
    required: [true,'Please enter userName'] 
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  role: {
    type: String,
    required: true,
    default: 'User'
  },
  lastLogin : {
    type : Date,
    default : Date.now(),
  },
  isLogin : {
    type : Boolean,
    default : false
  }
},
  { timestamps: true }
);


const User = mongoose.model("User", userSchema);

module.exports = User;