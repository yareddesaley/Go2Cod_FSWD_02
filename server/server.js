const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes/routes");
require("dotenv").config();
const path = require("path");
const multer = require("multer");
const port = process.env.PORT || 4444;
// const mongodb_uri = process.env.MONGODB_URI;
const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(router);
app.listen(port, (req, res) => {
  console.log(`connected to port ${port} successully`);
});
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to database successfully"))
  .catch((error) =>
    console.log(`error occured while connecting to db ${error}`)
  );


//uploadding an image using multer
const storage = multer.diskStorage({
  destination: "https://store-backend-1oan.onrender.com/upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });
app.use("/images", express.static("https://store-backend-1oan.onrender.com/upload/images"));
const uploadImage = (req, res) => {
  console.log(req.file);
  res.json({
    image_url: `https://store-backend-1oan.onrender.com/images/${req.file.filename}`,
  });
};
app.post("/upload", upload.single("product"), uploadImage);
