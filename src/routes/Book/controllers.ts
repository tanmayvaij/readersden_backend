import { Request, Response } from "express";
import { BookSchema } from "./schema";


export const handleAddBook = async (req: Request, res: Response) => {

    const book = await BookSchema.create({ ...req.body })

    res.json({ success: true, book })

}

export const handleGetMyBooks = async (req: Request, res: Response) => {
    
    const mybooks = await BookSchema.find({ user_id: req.body.id })

    res.json(mybooks)

}

export const handleGetAllBooks = async (req: Request, res: Response) => {

    const allBooks = await BookSchema.find({ })
    
    res.json(allBooks)

}
