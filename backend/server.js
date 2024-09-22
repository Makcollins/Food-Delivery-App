import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import FoodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config
const app = express()
const port = process.env.PORT || 4000

// mongodb+srv://makcollins16:fb7BgPaSFFHrGf0z@fooddelivery.mqvogiz.mongodb.net/?

// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

// api endpoints
app.use("/api/food",FoodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

// run express Server
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
