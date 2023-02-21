import { model, Schema } from "mongoose";

export const BookSchema = model("book", new Schema({

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

}))
