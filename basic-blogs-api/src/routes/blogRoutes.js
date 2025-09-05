const express = require("express");

const router = express.Router();

let blogs = [
  {
    id: 1,
    title: "First Blog Post",
    description: "This is the first blog post description",
  },
  {
    id: 2,
    title: "Getting Started with Web Development",
    description:
      "An introduction to the basics of web development for beginners.",
  },
  {
    id: 3,
    title: "Understanding JavaScript",
    description:
      "A beginner-friendly guide to learning JavaScript fundamentals.",
  },
  {
    id: 4,
    title: "CSS Tips and Tricks",
    description:
      "Enhance your web pages with these useful CSS styling techniques.",
  },
  {
    id: 5,
    title: "Mastering React Components",
    description:
      "Learn how to create and reuse components in React applications.",
  },
  {
    id: 6,
    title: "The Importance of Responsive Design",
    description: "Why responsive design matters and how to implement it.",
  },
  {
    id: 7,
    title: "Boosting Website Performance",
    description:
      "Practical tips to make your website faster and more efficient.",
  },
  {
    id: 8,
    title: "Exploring Node.js",
    description:
      "An overview of Node.js and how it powers modern web applications.",
  },
  {
    id: 9,
    title: "Introduction to APIs",
    description:
      "What APIs are and how developers use them to connect systems.",
  },
  {
    id: 10,
    title: "Future of Web Development",
    description: "A look at upcoming trends and technologies shaping the web.",
  },
];

//get all blogs
router.get("/", (req, res) => {
  res.send(blogs);
});
//get a single blog id

router.get("/:id", (req, res) => {
  const { id } = req.params;

  //find existing blog
  const existingBlog = blogs.find((blog) => blog.id === parseInt(id));

  if (!existingBlog) {
    // res.send("No Blog Found");
    res.status(404).json({ massage: "Blog not found" });
  }
  res.status(200).json(existingBlog);
});

//add a ner blog

router.post("/add-post", (req, res) => {
  const { title, description } = req.body;
  const newBlog = { id: blogs.length + 1, title, description };
  blogs.push(newBlog);
  res.status(200).json({
    massage: "New post Added",
    blog: newBlog,
  });
});

//update a blog by id

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, author } = req.body;
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  if (!blog) return res.status(404).json({ massage: "blog not found" });
  blog.title = title || blog.title;
  blog.description = description || blog.description;
  blog.author = author || blog.author;
  res.status(200).json({
    massage: "Blog update sucessfully",
  });
});

module.exports = router;
