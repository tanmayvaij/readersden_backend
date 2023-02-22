"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = (0, mongoose_1.model)("user", new mongoose_1.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    number: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
}));
