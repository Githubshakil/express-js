const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 3000


//middleware
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('server is running.....!')
})

//set headers

app.get('/headers', (req, res) => {
    res.set('custom-header-1','This is custom header')
    res.send('header set correctly')
})

//set cookies
app.get('/set-cookies', (req,res)=>{
    const token = "shakil123456"
    res.cookie('token', token, {
        httpOnly:true,
        expires:new Date(Date.now() + 900000),
        secure:true,

    })
    res.send('cookies set successfully')
})

//get cookies
app.get("/dashboard", (req,res)=>{
    const token = req.cookies.token
    console.log(token)
    if(!token){
        return res.status(401).send('unauthorized user')
    }
    res.send('welcome to dashboard')
})

//clear cookies
app.get('/clear-cookies', (req,res)=>{
    res.clearCookie('token')
    res.send('cookies cleared')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
