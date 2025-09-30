const { error } = require("console");
const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const fs = require("fs")
const port = 3000;

//multer file storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); //unique file name
  },
});

const upload = multer({ storage, limits: {
    fileSize: 1024 * 1024 * 5
}});

//middleware
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "file not found" });
  res.status(200).json({
    message: "File Uploaded sucessfully",
    file: req.file.filename,
  });
});

app.delete("/delete/:filename", (req,res)=>{
    const filePath = path.join(process.cwd(), "uploads", req.params.filename)
    fs.unlink(filePath, (err)=>{
        if (err) {
            return res.status(500).json({error: "file deletion failed"})
        }else{
            return res.status(200).json({message: "file deleted successfully"})
        }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
