const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

//routes
const bookRoutes = require("./src/routes/bookRoutes.js");
app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("Wellcome to the Book Library API");
});

app.listen(port, () => {
  console.log(`Wellcome to the Book Library API listening on port ${port}`);
});
