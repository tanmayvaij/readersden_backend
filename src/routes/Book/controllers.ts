import { Request, Response } from "express";
import { BookSchema } from "./schema";


export const handleAddBook = async (req: Request, res: Response) => {

    console.log("add book api called")

    const book = await BookSchema.create({ ...req.body })

    res.json({ success: true, book })

}

export const handleGetMyBooks = async (req: Request, res: Response) => {

    console.log("get my books api called")
    
    const mybooks = await BookSchema.find({ user_id: req.body.id })

    res.json(mybooks)

}

export const handleGetAllBooks = async (req: Request, res: Response) => {

    console.log("get all books api called")

    const allBooks = await BookSchema.find({ })
    
    res.json(allBooks)

}
