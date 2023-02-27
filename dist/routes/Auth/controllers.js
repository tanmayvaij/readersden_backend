"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetUser = exports.handleSignUp = exports.handleSignIn = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const schema_1 = require("./schema");
const handleSignIn = async (req, res) => {
    console.log("Signin api called");
    const { email, password } = req.body;
    const user = await schema_1.UserSchema.findOne({ email: email.trim() });
    if (!user)
        return res.json({ success: false, message: `user with ${email} doesn't exists` });
    const match = await (0, bcrypt_1.compare)(password.trim(), user.password);
    if (!match)
        return res.json({ status: false, message: "invalid credentials" });
    const payload = {
        id: user.toObject()._id.toString(),
        name: user.name,
        number: user.number,
        email: user.email
    };
    const authtoken = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_SECRET);
    res.json({ success: true, authtoken });
};
exports.handleSignIn = handleSignIn;
const handleSignUp = async (req, res) => {
    console.log("Signup api called");
    const { email } = req.body;
    const userExists = await schema_1.UserSchema.findOne({ email });
    if (userExists)
        return res.json({ success: false, message: "User with given email already exists" });
    const user = await schema_1.UserSchema.create({ ...req.body });
    const payload = { id: user.toObject()._id.toString(), ...req.body };
    const authtoken = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_SECRET);
    res.json({ success: true, authtoken });
};
exports.handleSignUp = handleSignUp;
const handleGetUser = (req, res) => {
    console.log("get user api called");
    const user = req.user;
    res.json({ ...user });
};
exports.handleGetUser = handleGetUser;
