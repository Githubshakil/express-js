const express = require('express')
const app = express()
const port = process.env.PORT || 5050




//defult middleware

app.use(express.json())

//useing blogs routes
const blogsRoute = require('./src/routes/blogRoutes.js')
app.use('/blogs', blogsRoute )






app.get('/', (req, res) => {
  res.send('Blog Server is Running ....!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
