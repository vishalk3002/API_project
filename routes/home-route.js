const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth-middleware");

router.get("/welcome", authMiddleware, (req, res) => {
  //adding one more layer of protection so that only admin can access this page

  const { _id, username, role } = req.userInfo;
  res.json({
    message: "Welcome to the home page",
    user: {
      _id,
      username,
      role,
    },
  });
});

module.exports = router;
