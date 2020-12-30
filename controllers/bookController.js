const mongoose = require('mongoose');
const { bookSchema } = require('../models/bookModel');

// Creating a model with Book as the object name and bookSchema as the Schema
const Book = mongoose.model('Book', bookSchema)

/**
 * Add a new word in the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const addBook = (req, res) => {
    let newBook = new Book(req.body);

    newBook.save((err, book) => {
        if (err) {
            res.status(500).json({
                error: `An unknown server error occurred.`
            });
        }
        res.status(201).json({
            id: book._id,
            createdAt: book.createdAt
        });
    })
}

/**
 * Fetch all stories based on query parameters.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const getBooks = (req,res) => {
    Book.find({}).select('-_id -__v -paragraphs -num_words').exec((err, books) => {
        if (err) {
            res.status(500).json({
                error: `An unknown server error occurred.`
            });
        }
        res.status(200).json({
            books: books
        });
    })
}

module.exports = {
    addBook: addBook,
    getBooks: getBooks
}