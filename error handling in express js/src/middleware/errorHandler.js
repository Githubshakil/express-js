
// error middleware function
const errorHandler = (err, req, res, next) => {
  res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error from About Page"
    })
}

module.exports = errorHandler