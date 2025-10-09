const express = require("express");
const app = express();
const cors = require('cors')
const ejs = require('ejs')
require("dotenv").config();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json())
app.use(cors())
app.use(express.static("public"))
app.set('view engine', 'ejs')


//routes
app.get("/", (req, res) => {res.render("index")});
app.get("/about", (req, res) => {res.render("about")});
app.get("/project", (req, res) => {res.render("project")});
app.get("/contact", (req, res) => {res.render("contact")});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
