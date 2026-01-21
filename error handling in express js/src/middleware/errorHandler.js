
// error middleware function
const errorHandler = (err, req, res, next) => {

  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Server Error"
  res.status(statusCode).json({
    success: false,
    message
    
  })
  // res.status(500).json({
  //     success: false,
  //     message: err.message || "Internal Server Error from About Page"
  //   })
}

module.exports = errorHandler