const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// middleware to parse JSON request bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("well come to my server 2.0");
});

// get request: get information

app.get("/about", (req, res) => {
  res.send("This is a About Page");
});

// post request: create a new post

app.post("/contact", (req, res) => {
  // console.log("posting contact details");
  console.log(req.body);

  res.send("massage recived");
});

// put request: edit or update information

app.put("/edit-post/:id", (req, res) => {
  console.log("editing post by put request method");
  res.send("editing sucessful")
  
})

// patch request: edit or update information

app.patch("/edit-post/:id", (req, res) => {
  console.log("editing post by patch request method");
  res.send("editing sucessful")
})

// delete request:

app.delete("/comments/:id", (req, res)=>{
  // console.log(req.params.id)
  const commentId =req.params.id
  console.log("Deleting comments using delete request method")
  res.send(`Deleted comment of ${commentId} sucessful`)
})

//Route parameters
app.get("/users/:id",(req,res)=>{
  const userId = req.params.id
  res.send(`User id: ${userId}`)
})

// query string parameter

app.get("/search", (req,res) => {
  // console.log(req.query)
  const {category} = req.query
  // console.log(category)
  res.send(`Searching for ${category} product page`)
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
