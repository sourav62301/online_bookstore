const Book = require("../models/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
  }
  if (!books) {
    return res.status(404).json({ message: "No Books found" });
  }
  return res.status(200).json({ books });
};

const addBook = async (req, res, next) => {
  const {
    title,
    author,
    description,
    price,
    customer_rating,
    available,
    image,
  } = req.body;
  let book;
  try {
    book = new Book({
      title,
      author,
      description,
      price,
      customer_rating,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable to add Book" });
  }
  return res.status(201).json({ book });
};

const getBookById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "Book not found!!" });
  }
  return res.status(200).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const {
    title,
    author,
    description,
    price,
    customer_rating,
    available,
    image,
  } = req.body;
  let book;

  try {
    book = await Book.findByIdAndUpdate(id, {
      title,
      author,
      description,
      price,
      customer_rating,
      available,
      image,
    });
    book = await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    res.status(404).json({ message: "Unable to Update" });
  }
  res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    res.status(404).json({ message: "Unable to Delete" });
  }
  res.status(200).json({ message: "Book deleted successfully" });
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
