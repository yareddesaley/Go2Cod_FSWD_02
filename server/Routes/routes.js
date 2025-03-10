const express = require("express");
const multer = require("multer");
const path = require("path"); // Import the path module
const {
  registerUser,
  loginUser,
  allProducts,
  addProduct,
  getSingleProduct,
  deleteProduct,
} = require("../Controller/controller");

const router = express.Router();

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Specify the directory where files should be saved
  },
  filename: function (req, file, cb) {
    // Generate a unique filename
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Initialize Multer with the storage engine
const upload = multer({ storage: storage });

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addproduct", upload.single("imageUri"), addProduct); // Use upload.single() for single file upload
router.post("/deleteProduct", deleteProduct);
router.get("/allproducts", allProducts);
router.get("/getproduct:userId", getSingleProduct);

module.exports = router;