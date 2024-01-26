import { compare } from "bcrypt";
import { Response, Request } from "express";
import { sign } from "jsonwebtoken";
import { UserSchema } from "./schema";
import process from "process";

interface SigninCreds {
  email: String;
  password: String;
}

export const handleSignIn = async (req: Request, res: Response) => {
  console.log("Signin api called");

  const { email, password }: SigninCreds = req.body;

  const user = await UserSchema.findOne({ email: email.trim() });
  if (!user)
    return res.json({
      success: false,
      message: `user with ${email} doesn't exists`,
    });

  const match = await compare(
    password.trim() as string,
    user.password as string
  );
  if (!match)
    return res.json({ status: false, message: "invalid credentials" });

  const payload = {
    id: user.toObject()._id.toString(),
    name: user.name,
    number: user.number,
    email: user.email,
  };

  const authtoken = sign(payload, process.env.JWT_SECRET as string);

  res.json({ success: true, authtoken });
};

export const handleSignUp = async (req: Request, res: Response) => {
  console.log("Signup api called");

  const { email } = req.body;

  const userExists = await UserSchema.findOne({ email });
  if (userExists)
    return res.json({
      success: false,
      message: "User with given email already exists",
    });

  const user = await UserSchema.create({ ...req.body });

  const payload = { id: user.toObject()._id.toString(), ...req.body };

  const authtoken = sign(payload, process.env.JWT_SECRET as string);

  res.json({ success: true, authtoken });
};

export const handleGetUser = (req: Request, res: Response) => {
  console.log("get user api called");

  const user = req.user;

  res.json({ ...user });
};
