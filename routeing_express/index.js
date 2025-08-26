const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// middleware to parse JSON request bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("well come to my server 2.0");
});

// get request

app.get("/about", (req, res) => {
  res.send("This is a About Page");
});

// post request

app.post("/contact", (req, res) => {
  // console.log("posting contact details");
  console.log(req.body);

  res.send("massage recived");
});

// put request

app.put("/edit-post/:id", (req, res) => {
  console.log("editing post by put request method");
  res.send("editing sucessful")
  
})

// patch request

app.patch("/edit-post/:id", (req, res) => {
  console.log("editing post by patch request method");
  res.send("editing sucessful")
})









app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
