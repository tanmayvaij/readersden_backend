import { Request, Response, NextFunction } from "express"
import { genSalt, hash } from "bcrypt"
import { verify } from "jsonwebtoken"

// declaring additional property ( user ) in Request interface
declare global {
    namespace Express {
      interface Request {
        user: Object
      }
    }
}

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


export const verifyUser = ( req: Request, res: Response, next: NextFunction ) => {

    const authtoken = req.header("authtoken") as string

    const user = verify(authtoken, process.env.JWT_SECRET as string)

    req.user = user

    next()

}
