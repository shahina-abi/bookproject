import express from 'express';


import validateBook from '../middlewares/validateBook.js';
import {
  createBook,
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook
} from '../controllers/booksController.js';

const router = express.Router();

// Route for saving book to database
router.post('/', validateBook, createBook);

// Route for getting all books from the database
router.get('/', getAllBooks);

// Route for getting one book
router.get('/:id', getOneBook);

// Route for updating a book
router.put('/:id', validateBook, updateBook);

// Route for deleting a book
router.delete('/:id', deleteBook);

export default router;
