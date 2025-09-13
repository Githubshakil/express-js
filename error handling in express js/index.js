const express = require('express')
const app = express()
const fs = require('fs')
const port = process.env.PORT || 3000



app.get('/', (req, res) => {
  try {
    res.send("HomePage")
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error from HomePage"
    })
  }
})


app.get('/about', (req, res) => {
  try {
    res.send("About Page")
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error from About Page"
    })
  }
})

app.get('/products', (req, res) => {
  try {
    res.send("Products Page")
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error from Products Page"
    })
  }
})

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
  console.log(`Example app listening on port ${port}`)
})
