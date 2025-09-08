//middleware structure
const myMiddleware = (req,res,next) => {
    console.log("Middleware excuated!")
    next()
} 

module.exports = myMiddleware