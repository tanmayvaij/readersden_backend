"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BookSchema = (0, mongoose_1.model)("book", new mongoose_1.Schema({
    user_id: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_number: {
        type: String,
        required: true
    },
    book_name: {
        type: String,
        required: true
    },
    book_image: {
        type: String,
        required: true
    },
    book_desc: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        required: true,
        default: true
    }
}));
