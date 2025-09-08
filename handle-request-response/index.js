const express = require("express")

const app = express()

const port = process.env.PORT || 3000

app.get("/", (req,res)=>{
    res.send("server is running!")
})

app.get("/inspect", (req,res)=>{
    console.log("Request method:",req.method)
    console.log("Request url:",req.url)
    // console.log("paraMetters:", req.params)
    console.log("query:",req.query)
    console.log("headers:",req.headers)
    res.send("inspect Request now")
})

//res object in details

app.get("/text", (req,res)=>{
    res.send("this is  a text route")
})
app.get("/json-data", (req,res)=>{
    res.json({massage: "hello this is a json data"})
})
app.get("/status", (req,res)=>{
    res.status(404).send("page not found")
    // res.status(200).send("ok")
})

app.get("/redirect",(req,res)=>{
    res.redirect('/text')
   
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})