import express from 'express'
import dotenv from 'dotenv'
import connectDB from './lib/db.js'
import useRouter from './route/auth/AuthRoutes.js'
import cors from 'cors'
dotenv.config()

const app=express()
app.use(express.json())
connectDB()

const PORT=process.env.PORT || 3000


app.use(cors())

app.use("/auth",useRouter)



app.listen(PORT ,()=>{
    console.log(`server is running on port ${PORT}`)
})