const express = require("express")
const router = express.Router()



//local books
let books = [
    {id: 1, title: "the great getsby", author: "F. Scott Fitzgerald"},
]

//get all routes

router.get("/", (req,res)=>{
    res.json({version: "v1", books})
})

module.exports = router

