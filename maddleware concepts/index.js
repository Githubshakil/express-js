const express = require('express')
const activityLogger = require('./src/middleware/logger')
const app = express()
const port = process.env.PORT || 5050

//use the custom middleware globally
app.use(activityLogger)

app.get('/', (req, res) => {
  res.send('Well come to our server!')
})

app.get("/about", (req,res)=>{
  res.send("About Page")
})

//middleware structure
const myMiddleware = (req,res,next) => {
    console.log("Middleware excuated!")
    next()
} 
app.get('/products',myMiddleware, (req,res) =>{
    res.send("product page")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
