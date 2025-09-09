const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Project User Profile API Running....");
});

//get user profile

app.get("/api/profile", (req, res) => {
  const user = [
    {
      id: 1,
      name: "Shakil",
      email: "shakil@gmail.com",
      phone: "01622869998",
    },
    {
      id: 2,
      name: "Shakil1",
      email: "shakil1@gmail.com",
      phone: "01622869988",
    },
    {
      id: 3,
      name: "Shakil2",
      email: "shaki2@gmail.com",
      phone: "01622869888",
    },
  ];
  res.status(200).json(user);
});

//set cookies
app.get("/set-custom-cookies", (req, res) => {
  res.cookie("customCookie", "shakil1234567890", {
    maxAge: 60000,
    httpOnly: true,
    secure: false,
  });
  res.send(`cookie set successfully`);
});

//get cookies

app.get("/get-custom-cookies", (req, res) => {
  const cookie = req.cookies.customCookie;
  console.log(cookie);
  res.send(`your custom cookie is : ${cookie}`);
});

//Delete cookies
app.get("/delete-custom-cookies", (req, res) => {
  res.clearCookie("customCookie");
  res.send("cookie delete successfully");
});

//profile html page

app.get("/profile", (req, res) => {
  const cookie = req.cookies.customCookie;
  if (!cookie) {
    return res.status(401).json({ massage: "UnAuthorized access" });
  }
  const filePath = path.join(process.cwd(), "public", "profile.html");
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
