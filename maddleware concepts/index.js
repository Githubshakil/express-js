const express = require('express')
const app = express()
const port = process.env.PORT || 5050

app.get('/', (req, res) => {
  res.send('Well come to our server!')
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
