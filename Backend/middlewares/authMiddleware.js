const jwt = require("jsonwebtoken");
const { handleError } = require("../utils/errorHandler");

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return handleError({ message: "Unauthorized", statusCode: 401 }, res);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    handleError({ message: "Invalid or expired token", statusCode: 401 }, res);
  }
};
