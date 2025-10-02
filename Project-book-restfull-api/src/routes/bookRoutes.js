const express = require('express')

const router = express.Router()

//local database

let books = [
    {id:1, title:'the great getsby', author:'F. Scott Fitzgerald'},
    {id:2, title:'to kill a mockingbird', author:'Harper Lee'},
    {id:3, title:'1984', author:'George Orwell'},
    {id:4, title:'pride and prejudice', author:'Jane Austen'},
    {id:5, title:'the catcher in the rye', author:'J.D. Salinger'}
]


//get all books
router.get('/',(req,res)=>{
    res.status(200).json(books)
})

// add a new book
router.post('/', (req, res) =>{
    // const newBook = {id: books.length + 1, title:req.body.title, author:req.body.author}
    const newBook = {id: books.length + 1, ...req.body}
    books.push(newBook)
    res.status(201).json(newBook)
})

//update a book
router.put('/:id', (req,res) =>{
    const { id } = req.params
    const findBookIndex = books.findIndex(book => book.id === parseInt(id))
    if (findBookIndex !== -1) {
        books[findBookIndex] = {...books[findBookIndex], ...req.body}
        res.status(200).json(books[findBookIndex])
    } else {
        res.status(404).json({message: 'Book not found'})
    }
    console.log(findBookIndex)
    

})

//delete a book
router.delete('/:id', (req,res) =>{
    const { id } = req.params
    const findBookIndex = books.findIndex(book => book.id === parseInt(id))
    if (findBookIndex !== -1) {
        books.splice(findBookIndex, 1)
        res.status(204).send()
    } else {
        res.status(404).json({message: 'Book not found'})
    }
})

module.exports = router