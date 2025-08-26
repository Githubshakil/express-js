const expess = require("express");

const app = expess();
const port = process.env.PORT || 2600;

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.listen(port, () => {
  console.log(`Your server is listening on port: ${port}`);
});
