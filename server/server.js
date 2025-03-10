const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes/routes");
require("dotenv").config();
const path = require("path");
// const multer = require("multer");
const port = process.env.PORT || 4444;
const mongodb_uri = process.env.MONGODB_URI;
const app = express();
const allowedOrigins = [
  "https://store-admin-zjfs.onrender.com",
  "http://localhost:4444", // For local development
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));
app.use(express.json());
app.use(router);
app.listen(port, (req, res) => {
  console.log(`connected to port ${port} successully`);
});
mongoose
  .connect(mongodb_uri)
  .then(() => console.log("connected to database successfully"))
  .catch((error) =>
    console.log(`error occured while connecting to db ${error}`)
  );
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Serve static files from the 'uploads' directory

//uploadding an image using multer
// const storage = multer.diskStorage({
//   destination: "upload/",
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       Date.now() + "-" + file.originalname
//     );
//   },
// });
// const upload = multer({ storage: storage });
// // app.use("/images", express.static("./upload/images"));
// const uploadImage = (req, res) => {
//   console.log(req.file);
//   res.json({
//     image_url: `${req.file.filename}`,
//   });
// };
// app.post("/upload", upload.single("product"), uploadImage);
