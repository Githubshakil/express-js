const express = require('express')
const customError = require('./src/utils/customError')
const errorHandler = require('./src/middleware/errorHandler')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Welcome to the Express Error Handleing Demo!')
})

//not found routes
app.get("/not-found", (req, res, next)=>{
  next(new customError("Not Found Error", 404))
})

app.get("/unauthorized", (req, res, next)=>{
  next(new customError("Unauthorized Access", 401))
})

//for normal error handling
app.get("/normal-error",(req,res,next)=>{
  next(new Error("This is a normal error just egnor it"))
})

//call reeor handler middleware

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
