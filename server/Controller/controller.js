const validator = require("validator");
const { userModel, productModel } = require("../Model/dbModels");
//register a user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.status(400).json("Email already registered");
    if (!name || !email || !password)
      return res.status(400).json("All fields are required");
    if (!validator.isEmail(email))
      return res.status(400).json("Enter a valide email address");
    if (!validator.isStrongPassword(password))
      return res.status(400).json("Password is not strong");
    user = new userModel({ name, email, password });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
//login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!email || !password)
      return res.status(400).json("Email or Password  is not correct");
    if (!user) return res.status(400).json("Email or Password  is not correct");
    if (user.password !== password)
      return res.status(400).json("Email or Password  is not correct");
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
//add product to db
const addProduct = async (req, res) => {
  try {
    const { price, description, category, imageUri } = req.body;
    if (!price || !description || !category || !imageUri)
      return res.status(400).json("All fields are required");
    let user = new productModel({ price, description, category, imageUri });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
//get all products
const allProducts = async (req, res) => {
  try {
    let user = await productModel.find({});
    if (!user) return res.status(400).json("There is no product to sell");
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
//get a single product
const getSingleProduct = async (req, res) => {
  try {
    const userId = req.params.userId;
    let user = await productModel.findById(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteProduct = async (req, res) => {
  try {
    let user = await productModel.findOneAndDelete({ _id: req.body.id });
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  registerUser,
  loginUser,
  allProducts,
  addProduct,
  getSingleProduct,
  deleteProduct,
};
