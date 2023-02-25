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


export const handleDeleteBookById = async (req: Request, res: Response) => {

    console.log("delete book by id api called")

    const result = await BookSchema.deleteOne({ _id: req.body._id })
    
    res.json(result)

}


export const handleDisableBookView = async (req: Request, res: Response) => {

    console.log("disable book view api called")

    const result = await BookSchema.updateOne({ _id: req.body._id }, { visible: false })

    res.send(result)

}


export const handleEnableBookView = async (req: Request, res: Response) => {

    console.log("enable book view api called")

    const result = await BookSchema.updateOne({ _id: req.body._id }, { visible: true })

    res.send(result)

}

export const handleGetBookById = async (req: Request, res: Response) => {

    console.log("get single book by id api called")

    const book = await BookSchema.findOne({ _id: req.body._id })
    
    res.json(book)
    
}
