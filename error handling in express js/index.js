const express = require("express");
const app = express();
const fs = require("fs");
const errorHandler = require("./src/middleware/errorHandler");
const CustomError = require("./src/utils/customError");
const port = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  // try {
  //   res.send("HomePage")
  // } catch (error) {
  //   res.status(500).json({
  //     success: false,
  //     message: error.message || "Internal Server Error from HomePage"
  //   })
  // }
  const error = new Error("Home route error");
  next(error);
});

//not found file will throw error
app.get("/notfound", (req, res, next) => {
  next(new CustomError("Resource not found", 404))
})

app.get("/about", (req, res, next) => {
  try {
    fs.readFileSync("./abc.txt");
    res.send("About Page");
  } catch (error) {
    next(error);
  }
});

app.get("/products", (req, res, next) => {
  try {
    res.send("Products Page");
  } catch (error) {
    next(error);
  }
});

// global middleware for error handling

app.use(errorHandler);

// Al Jarrar Mahmud

//error handling in express js class406
// app.get('/', (req, res,next) => {
//    const error = new Error("Something went wrong")
//    error.status = 500
//    next(error)

// })

// const errorMiddleware = (err, req, res, next) =>{
//     res.status(err.status || 500).json({
//         success: false,
//         message: err.message || "Internal Server Error"
//     })
// }

//use the middleware
// app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
