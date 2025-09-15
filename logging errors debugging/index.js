const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res, next) => {
  const error = new Error("Not found home page")
  next(error)
})

//call middleware
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
