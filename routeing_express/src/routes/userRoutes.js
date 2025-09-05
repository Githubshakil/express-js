const express = require('express')

const router = express.Router()


router.get("/:id",(req,res)=>{
  const userId = req.params.id
  res.send(`User id: ${userId}`)
})


router.get('/', (req, res)=>{
  res.send("All users")
})

module.exports= router