import { Request, Response, NextFunction } from "express"
import { genSalt, hash } from "bcrypt"

export const hashPassword = async ( req: Request, res: Response, next: NextFunction ) => {

    try {

        const { password } = req.body

        const salt = await genSalt(10)
    
        const hashedPassword = await hash(password, salt)
    
        req.body.password = hashedPassword
    
        next()

    }

    catch (err) {

        return res.json({ success: false, message: err })

    }

}
