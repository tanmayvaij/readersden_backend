import { Request, Response } from "express";
import { BookSchema } from "./schema";


export const handleAddBook = async (req: Request, res: Response) => {

    const book = await BookSchema.create({ ...req.body })

    res.json({ success: true, book })

}
