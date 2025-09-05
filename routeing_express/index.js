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


//routes here
const blogRoutes = require('./src/routes/postRoutes.js')
const userRoutes = require('./src/routes/userRoutes.js')
app.use("/blogs", blogRoutes)
app.use("/users",userRoutes )

// post request: create a new post

app.post("/contact", (req, res) => {
  // console.log("posting contact details");
  console.log(req.body);

  res.send("massage recived");
});

// put request: edit or update information



// delete request:

app.delete("/comments/:id", (req, res)=>{
  // console.log(req.params.id)
  const commentId =req.params.id
  console.log("Deleting comments using delete request method")
  res.send(`Deleted comment of ${commentId} sucessful`)
})

//Route parameters


// query string parameter

app.get("/search", (req,res) => {
  // console.log(req.query)
  const {category,title} = req.query
  // console.log(category)
  res.send(`Searching for ${title} available in ${category} product page`)
})

//dynamic routes

app.get("/posts/:id",(req, res)=>{
  const postId = req.params.id
  res.send(`WE are geting the post no: ${postId}`)
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
