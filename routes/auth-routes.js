const express = require("express");
const {
  registerUser,
  loginUser,
  changePassword,
} = require("../controllers/auth-controller");
const router = express.Router();

//protecting cahnge password -> can change the password if only loggedIn
const authMiddleware = require("../middleware/auth-middleware");

//all routes are related to authentication& authorization
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/change-password", authMiddleware, changePassword);

module.exports = router;
