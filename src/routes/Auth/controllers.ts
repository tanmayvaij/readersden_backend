import { Response, Request } from "express"
import { sign } from "jsonwebtoken"
import { UserSchema } from "./schema"


export const handleSignIn = async (req: Request, res: Response) => {



    res.send("handleSignIn")

}


export const handleSignUp  = async (req: Request, res: Response) => {

    const { email } = req.body

    const userExists = await UserSchema.findOne({ email })
    if (userExists) return res.json({ success: false, message: "User with given email already exists" })    

    const user = await UserSchema.create({ ...req.body })

    const payload = { id: user.toObject()._id.toString(), ...req.body }

    console.log(payload)
    

    const authtoken = sign(payload, process.env.JWT_SECRET as string)

    res.json({ success: true, authtoken })

}


export const handleGetUser = (req: Request, res: Response) => {
    res.send("handleGetUser")
}
