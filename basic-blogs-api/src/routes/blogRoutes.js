 const express = require ('express')

 const router = express.Router()

let blogs = [
    
  {
    "id": 1,
    "title": "First Blog Post",
    "description": "This is the first blog post description"
  },
  {
    "id": 2,
    "title": "Getting Started with Web Development",
    "description": "An introduction to the basics of web development for beginners."
  },
  {
    "id": 3,
    "title": "Understanding JavaScript",
    "description": "A beginner-friendly guide to learning JavaScript fundamentals."
  },
  {
    "id": 4,
    "title": "CSS Tips and Tricks",
    "description": "Enhance your web pages with these useful CSS styling techniques."
  },
  {
    "id": 5,
    "title": "Mastering React Components",
    "description": "Learn how to create and reuse components in React applications."
  },
  {
    "id": 6,
    "title": "The Importance of Responsive Design",
    "description": "Why responsive design matters and how to implement it."
  },
  {
    "id": 7,
    "title": "Boosting Website Performance",
    "description": "Practical tips to make your website faster and more efficient."
  },
  {
    "id": 8,
    "title": "Exploring Node.js",
    "description": "An overview of Node.js and how it powers modern web applications."
  },
  {
    "id": 9,
    "title": "Introduction to APIs",
    "description": "What APIs are and how developers use them to connect systems."
  },
  {
    "id": 10,
    "title": "Future of Web Development",
    "description": "A look at upcoming trends and technologies shaping the web."
  }
]

//get all blogs
router.get('/',(req,res)=>{
    res.send(blogs)
})




 module.exports = router