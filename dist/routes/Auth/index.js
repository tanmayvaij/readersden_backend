"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// importing controllers
const controllers_1 = require("./controllers");
// importing middlewares
const middlewares_1 = require("./middlewares");
const router = (0, express_1.Router)();
router.route("/signin").post(controllers_1.handleSignIn);
router.route("/signup").post(middlewares_1.hashPassword, controllers_1.handleSignUp);
router.route("/getuser").get(middlewares_1.verifyUser, controllers_1.handleGetUser);
exports.default = router;
