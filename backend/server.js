import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import { connectDB } from './config/db.js'
import FoodRouter from './routes/foodRoute.js'

// app config
const app = express()
const port = 4000

// mongodb+srv://makcollins16:fb7BgPaSFFHrGf0z@fooddelivery.mqvogiz.mongodb.net/?

// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

// api endpoints
app.use("/api/food",FoodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")
})

// run express Server
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})