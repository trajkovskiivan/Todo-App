const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, {timestamps: true});

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  age: Number,
  userId: String,
  todos: [todoSchema]
}, {timestamps: true});

const User = mongoose.model('user', userSchema);
module.exports = User;