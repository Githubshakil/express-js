const { error } = require("winston")


 const errorHandler = (err, req, res, next) =>{
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"

    //log error (optional)

    logger.error({
        status: statusCode,
        message,
        method: req.method,
        url: req.orignalUrl,
        stack: err.stack
    })

    res.status(statusCode).json({
        sucess: false,
        error:{
            status: statusCode,
            message
        }

    })

 }

 module.exports = errorHandler