const express = require("express");
const app = express();
const cors = require("cors");
const e = require("express");
const upload = require("./src/utils/multer.js");
const cloudinary = require("./src/utils/cloudinaryConfig.js") 
const fs = require("fs");
const port = process.env.PORT || 3000;


//middleware
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Image Upload Server is Running");
});

app.post("/upload",upload.single("image") , async(req, res) => {
    if (!req.file) {
        return res.status(400).json({error:"No file uploaded"});
    }
    try {
        const result = await cloudinary.uploader.upload(req.file.path,{
            folder: "uploads"
        })

        //delete file from local uploads folder after upload to cloudinary
        fs.unlinkSync(req.file.path)
        res.status(201).json({message:"File uploaded successfully", imageURL: result.secure_url})


    } catch (error) {
        res.status(500).json({error: "Upload failed", details: error.message})
    }
})

app.listen(port, () => {
  console.log(`The Server is listening on port ${port}`);
});
