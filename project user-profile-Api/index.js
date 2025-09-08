const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Project User Profile API Running....')
})


//get user profile

app.get("/api/profile", (req, res)=>{
    const user =[
        {
        id:1,
        name: "Shakil",
        email: "shakil@gmail.com",
        phone: "01622869998"
    },
        {
        id:2,
        name: "Shakil1",
        email: "shakil1@gmail.com",
        phone: "01622869988"
    },
        {
        id:3,
        name: "Shakil2",
        email: "shaki2@gmail.com",
        phone: "01622869888"
    },
    ]
    res.status(200).json(user)
})

//set cookies
app.get('/set-custom-cookies', (req, res) =>{
    res.cookie('costum-cookie', '123abc', {
        maxAge: 60000,
        httpOnly:true,
        secure:true,

    })
    res.send(`cookie set successfully`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
