const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const productSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUri: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
const userModel = mongoose.model("user", userSchema);
const productModel = mongoose.model("products", productSchema);
module.exports = { userModel, productModel };
