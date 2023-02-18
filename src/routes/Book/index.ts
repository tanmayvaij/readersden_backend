import { Router } from "express"
import { handleAddBook } from "./controllers"

const router = Router()

router.route("/add_book").post(handleAddBook)

export default router
