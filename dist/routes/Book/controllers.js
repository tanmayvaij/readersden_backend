"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetBookById = exports.handleEnableBookView = exports.handleDisableBookView = exports.handleDeleteBookById = exports.handleGetAllBooks = exports.handleGetMyBooks = exports.handleAddBook = void 0;
const schema_1 = require("./schema");
const handleAddBook = async (req, res) => {
    console.log("add book api called");
    const book = await schema_1.BookSchema.create({ ...req.body });
    res.json({ success: true, book });
};
exports.handleAddBook = handleAddBook;
const handleGetMyBooks = async (req, res) => {
    console.log("get my books api called");
    const mybooks = await schema_1.BookSchema.find({ user_id: req.body.id });
    res.json(mybooks);
};
exports.handleGetMyBooks = handleGetMyBooks;
const handleGetAllBooks = async (req, res) => {
    console.log("get all books api called");
    const allBooks = await schema_1.BookSchema.find({});
    res.json(allBooks);
};
exports.handleGetAllBooks = handleGetAllBooks;
const handleDeleteBookById = async (req, res) => {
    console.log("delete book by id api called");
    const result = await schema_1.BookSchema.deleteOne({ _id: req.body._id });
    res.json(result);
};
exports.handleDeleteBookById = handleDeleteBookById;
const handleDisableBookView = async (req, res) => {
    console.log("disable book view api called");
    const result = await schema_1.BookSchema.updateOne({ _id: req.body._id }, { visible: false });
    res.send(result);
};
exports.handleDisableBookView = handleDisableBookView;
const handleEnableBookView = async (req, res) => {
    console.log("enable book view api called");
    const result = await schema_1.BookSchema.updateOne({ _id: req.body._id }, { visible: true });
    res.send(result);
};
exports.handleEnableBookView = handleEnableBookView;
const handleGetBookById = async (req, res) => {
    console.log("get single book by id api called");
    const book = await schema_1.BookSchema.findOne({ _id: req.body._id });
    res.json(book);
};
exports.handleGetBookById = handleGetBookById;
