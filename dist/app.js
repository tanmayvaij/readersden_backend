"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
// inititalised environment variables
(0, dotenv_1.config)();
const app = (0, express_1.default)();
// added middlewares
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// importing routers
const Auth_1 = __importDefault(require("./routes/Auth"));
const Book_1 = __importDefault(require("./routes/Book"));
// using routers
app.use("/api/auth", Auth_1.default);
app.use("/api/book", Book_1.default);
app.get("/", (req, res) => {
    console.log("Test api called");
    res.json("Hello World, This is a test api");
});
const start = () => {
    try {
        // connecting to database
        (0, db_1.connectDB)();
        app.listen(5000 || process.env.PORT, () => {
            console.log("Express server started at port 5000 successfully");
        });
    }
    catch (err) {
        console.log(err);
    }
};
start();
