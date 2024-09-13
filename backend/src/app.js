import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
  origin : 'http://localhost:5173',
  credentials : true
}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true, limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//api for user
import userRouter from "./routes/user.route.js"
app.use("/api/v1/users",userRouter)

//api for user
import promptRouter from "./routes/prompt.route.js"
app.use("/api/v1/prompt",promptRouter)


export {app}