const express = require("express");
const router = require("express").Router();
const bookRepository = require("../repositories/booksRepository");

router.use(express.json());

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const book = bookRepository.getBookById(id);

    if (!book) {
        res.status(404).json({
            success: false,
            error: "no book with that id!",
        });
    }

    return res.status(200).json({
        success: true,
        data: book,
    });
});

router.get("/", (req, res) => {
    const books = bookRepository.getAllBooks();

    res.status(200).json({
        success: true,
        data: books,
    });
});

router.post("/", (req, res) => {
    let newBook = req.body;
    newBook = bookRepository.createBook(newBook);
    res.status(201).json({
        success: true,
        data: newBook
    })
});
router.put('/:id', (req,res)=>{
    const id = req.params.id;

    const updated = bookRepository.editBook(id, req.body)

    if(updated){
        return res.status(200).json({
            success:true,
            data:updated
        })
    }
    return res.status(404).json({
        success:false,
        error: 'Book with this id doesnt exist!'
    })
})

router.delete('/:id', (req,res)=>{
    const id = req.params.id;
    bookRepository.deleteBook(id);

    res.status(200).json({
        success: true
    })
})

module.exports = router;
