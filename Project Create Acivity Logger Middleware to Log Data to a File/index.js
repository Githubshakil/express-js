const express = require('express')
const activityLogger = require('./src/middleware/logger')
const app = express()
const port =process.env.PORT || 3000


app.use(activityLogger)

app.get('/', (req, res) => {
  res.send('Activity Logger Applecation!')
})


app.get('/about',(req, res) => {
  res.send('About page')
})

app.get('/contact', (req,res)=>{
    res.send('contact page')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
