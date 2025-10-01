import React, { useState } from 'react'
import axios from 'axios'

const UploadImage = () => {
    const [file, setFile] = useState(null)
    const [imageUrl, setImageUrl] = useState("")


    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleUpload = async () =>{
        if (!file) {
            alert("please Choose a file to upload")
            return
        }

        const formData = new FormData()
        formData.append("image", file)

        try {
            const res = await axios.post("http://localhost:3000/upload", formData)
            if (res.status === 201) {
                alert("file upload successfully")
                setImageUrl(res.data.imageURL)
            }
        } catch (error) {
            console.error("upload faild", error)
        }
    }
    console.log(file)
  return (
   <div>
     <h1>Upload image</h1>

    <div>
        <input type="file" onChange={handleFileChange}/>
        <button onClick={handleUpload}>Upload</button>
    </div>

    <div>
        {imageUrl && <img src={imageUrl} alt="imageURL" width="500" height="500"/>}
    </div>
   </div>
  )
}

export default UploadImage