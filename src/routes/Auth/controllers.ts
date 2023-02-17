import { compare } from "bcrypt"
import { Response, Request } from "express"
import { sign } from "jsonwebtoken"
import { UserSchema } from "./schema"


export const handleSignIn = async (req: Request, res: Response) => {

    const { email, password } = req.body

    const user = await UserSchema.findOne({ email })
    if (!user) return res.json({ success: false, message: `user with ${email} doesn't exists` })

    const match = await compare(password, user.password as string)
    if (!match) return res.json({ status: false, message: "invalid credentials" })

    const payload = {
        id: user.toObject()._id.toString(),
        name: user.name,
        number: user.number,
        email: user.email
    }

    const authtoken = sign(payload, process.env.JWT_SECRET as string)

    res.json({ success: true, authtoken })

}


export const handleSignUp  = async (req: Request, res: Response) => {

    const { email } = req.body

    const userExists = await UserSchema.findOne({ email })
    if (userExists) return res.json({ success: false, message: "User with given email already exists" })    

    const user = await UserSchema.create({ ...req.body })

    const payload = { id: user.toObject()._id.toString(), ...req.body }

    const authtoken = sign(payload, process.env.JWT_SECRET as string)

    res.json({ success: true, authtoken })

}


export const handleGetUser = (req: Request, res: Response) => {

    const user = req.user

    res.json({ ...user })

}
