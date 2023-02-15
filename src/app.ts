import express from "express"
import { config } from "dotenv"
import { connectDB } from "./db"


// inititalised environment variables
config()

const PORT = 5000

const app = express()


// added middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// importing routers
import AuthRouter from "./routes/Auth"


// using routers
app.use("/api/auth", AuthRouter)


const start = () => {

    try {

        // connecting to database
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
