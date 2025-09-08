const express = require('express')
const activityLogger = require('./src/middleware/logger')
const myMiddleware = require('./src/middleware/myMiddleware')
const app = express()
const port = process.env.PORT || 5050

//defult middleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('src/public'))

//use the custom middleware globally
app.use(activityLogger)

app.get('/', (req, res) => {
  res.send('Well come to our server!')
})

//post new blog routes
app.post('/new-blog',(req,res)=>{
  console.log(req.body)
  res.send('Blog create successfully!')
})

app.get("/about", (req,res)=>{
  res.send("About Page")
})


app.get('/products',myMiddleware, (req,res) =>{
    res.send("product page")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
