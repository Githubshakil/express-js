const express = require("express");

const router = express.Router();

router.put("/edit-post/:id", (req, res) => {
  console.log("editing post by put request method");
  res.send("editing sucessful");
});

// patch request: edit or update information

router.patch("/edit-post/:id", (req, res) => {
  console.log("editing post by patch request method");
  res.send("editing sucessful");
});

module.exports = router;
