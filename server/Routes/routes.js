const express = require("express");
const {
  registerUser,
  loginUser,
  allProducts,
  addProduct,
  getSingleProduct,
  deleteProduct,
} = require("../Controller/controller");
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addproduct", addProduct);
router.post("/deleteProduct", deleteProduct);
router.get("/allproducts", allProducts);
router.get("/getproduct:userId", getSingleProduct);
// router.post("/upload", upload.single("product"), uploadImage);
module.exports = router;
