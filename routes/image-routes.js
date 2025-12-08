const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const uploadMiddleware = require("../middleware/upload-middleware");
const {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
} = require("../controllers/image-controller");

const router = express.Router();

//upload the image
router.post(
  "/upload",
  authMiddleware,
  adminMiddleware, //this adminMiddleware allows only admin to upload files else anyone can upload files
  uploadMiddleware.any(),
  uploadImageController
);

//to get all the images
router.get("/get", fetchImagesController);

//delete image route
//"_id": "6931bcc10648824de5456e98",
router.delete("/:id", authMiddleware, adminMiddleware, deleteImageController);

module.exports = router;
