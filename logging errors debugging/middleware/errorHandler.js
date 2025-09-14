const logger = require("./logger")

const errorHandler = (err, req, res, next) => {
    logger.error(`${err.st}`)
}