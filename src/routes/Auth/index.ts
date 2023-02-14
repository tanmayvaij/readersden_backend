import { Router } from "express"
import { handleSignIn, handleSignUp, handleGetUser } from "./controllers"

const router = Router()

router.route("/signin").post(handleSignIn)

router.route("/signup").post(handleSignUp)

router.route("/getuser").get(handleGetUser)

export default router
