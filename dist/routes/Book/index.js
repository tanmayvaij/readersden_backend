"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("./controllers");
const router = (0, express_1.Router)();
router.route("/add_book").post(controllers_1.handleAddBook);
router.route("/get_my_books").post(controllers_1.handleGetMyBooks);
router.route("/get_all_books").get(controllers_1.handleGetAllBooks);
exports.default = router;
