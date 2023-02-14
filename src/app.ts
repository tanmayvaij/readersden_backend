import express from "express"
import { config } from "dotenv"
import { connectDB } from "./db"

config()

const PORT = 5000

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


import AuthRouter from "./routes/Auth"

app.use("/api/auth", AuthRouter)

const start = () => {

    try {

        connectDB()

        app.listen(PORT || process.env.PORT, () => {
            console.log("Express server started at port 5000 successfully")
        })
        
    }

    catch (err) {
        console.log(err)
    }

}

start()

