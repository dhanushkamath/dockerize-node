const { getBooks, addBook, getBookById, getBookByTitle} = require('../controllers/bookController');
const express = require ('express')
const router = express.Router()

router.get('/', getBooks);
router.post('/', addBook);

module.exports = {
    bookRouter: router
}