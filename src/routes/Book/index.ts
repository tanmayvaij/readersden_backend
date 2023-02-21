import { Router } from "express"
import { handleAddBook, handleGetAllBooks, handleGetMyBooks } from "./controllers"

const router = Router()

router.route("/add_book").post(handleAddBook)

router.route("/get_my_books").post(handleGetMyBooks)

router.route("/get_all_books").get(handleGetAllBooks)

export default router
