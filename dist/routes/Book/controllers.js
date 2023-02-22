"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetAllBooks = exports.handleGetMyBooks = exports.handleAddBook = void 0;
const schema_1 = require("./schema");
const handleAddBook = async (req, res) => {
    const book = await schema_1.BookSchema.create({ ...req.body });
    res.json({ success: true, book });
};
exports.handleAddBook = handleAddBook;
const handleGetMyBooks = async (req, res) => {
    const mybooks = await schema_1.BookSchema.find({ user_id: req.body.id });
    res.json(mybooks);
};
exports.handleGetMyBooks = handleGetMyBooks;
const handleGetAllBooks = async (req, res) => {
    const allBooks = await schema_1.BookSchema.find({});
    res.json(allBooks);
};
exports.handleGetAllBooks = handleGetAllBooks;
