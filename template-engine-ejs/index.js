const express = require('express')
const app = express()
const path = require('path')
const port =process.env.PORT || 3000

//set EJS as the tr=emplate engine
app.set('view engine', 'ejs' )

//set views directory(folder containing)
app.set('views',path.join(process.cwd(), 'views'))

app.get('/',(req,res)=>{
    res.render('index', {title:"Home Page", message:'Welcome to EJS'})
})


app.listen(port, ()=>{
    console.log(`Server is Running port : ${port}`)
})
