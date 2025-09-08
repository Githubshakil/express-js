const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
const path = require("path")

app.get("/", (req, res) => {
  res.send("server is running!");
});

// sending json response

app.get("/api/user", (req,res)=>{
    const user = {
        id: 1,
        name: "Shakil",
        email: "shakil@gmail.com",

    }
    // res.json(user)
    res.status(200).json({
        success:true,
        massage: "user created successfully",
        user
    })
})

//sending html response

app.get("/html", (req,res)=>{
    res.send('<h1>Welcome to Express</h1> <p>This is a HTML Response</p>')
})

//sending file response

app.get('/file', (req,res)=>{
    const filePath = path.join(process.cwd(), "public", 'example.html')
    console.log(filePath)
    res.sendFile(filePath)
})
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
