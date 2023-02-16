import { Router } from "express"

// importing controllers
import { handleSignIn, handleSignUp, handleGetUser } from "./controllers"

// importing middlewares
import { hashPassword } from "./middlewares"

const router = Router()

router.route("/signin").post(handleSignIn)

router.route("/signup").post(hashPassword, handleSignUp)

router.route("/getuser").get(handleGetUser)

export default router
