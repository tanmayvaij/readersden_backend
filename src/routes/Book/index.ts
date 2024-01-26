import { Router } from "express";
import {
  handleAddBook,
  handleDeleteBookById,
  handleDisableBookView,
  handleEnableBookView,
  handleGetAllBooks,
  handleGetBookById,
  handleGetMyBooks,
} from "./controllers";

const router = Router();

router.route("/add_book").post(handleAddBook);

router.route("/get_my_books").post(handleGetMyBooks);

router.route("/get_all_books").get(handleGetAllBooks);

router.route("/get_book_by_id").post(handleGetBookById);

router.route("/delete_book_by_id").post(handleDeleteBookById);

router.route("/disable_book_view").post(handleDisableBookView);

router.route("/enable_book_view").post(handleEnableBookView);

export default router;
