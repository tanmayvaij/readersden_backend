"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = exports.hashPassword = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const hashPassword = async (req, res, next) => {
    try {
        const { password } = req.body;
        const salt = await (0, bcrypt_1.genSalt)(10);
        const hashedPassword = await (0, bcrypt_1.hash)(password, salt);
        req.body.password = hashedPassword;
        next();
    }
    catch (err) {
        return res.json({ success: false, message: err });
    }
};
exports.hashPassword = hashPassword;
const verifyUser = (req, res, next) => {
    const authtoken = req.header("authtoken");
    const user = (0, jsonwebtoken_1.verify)(authtoken, process.env.JWT_SECRET);
    req.user = user;
    next();
};
exports.verifyUser = verifyUser;
