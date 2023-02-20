import { model, Schema } from "mongoose";

export const BookSchema = model("book", new Schema({

    user_details: {
        type: Object,
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
