const CustomError = require("../utils/customError");

// error middleware function
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error from Error Handler",
  });
};

module.exports = errorHandler;
