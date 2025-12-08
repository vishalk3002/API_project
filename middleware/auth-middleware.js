const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  //console.log(authHeader);// to show beare token in console

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "No authorization header found.",
    });
  }

  const token = authHeader && authHeader.split(" ")[1]; //there's a space here between "<space>" in between split(" ") , else it will seperate each cahracter instead of text and token

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided. Please login to continue.",
    });
  }

  //decode this token
  try {
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodedTokenInfo);

    //add the above decoded token in request
    req.userInfo = decodedTokenInfo;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Access denied. No token provided. Please login to continue",
    });
  }
};

module.exports = authMiddleware;
