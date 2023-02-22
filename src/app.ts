import express from "express"
import { config } from "dotenv"
import { connectDB } from "./db"
import cors from "cors"

// inititalised environment variables
config()

const PORT = 5000 || process.env.PORT

const app = express()


// added middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// importing routers
import AuthRouter from "./routes/Auth"
import BookRouter from "./routes/Book"


// using routers
app.use("/api/auth", AuthRouter)
app.use("/api/book", BookRouter)

app.get("/", (req, res) => {
    res.json(process.env.MONGO_URI)
})

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
