import mongoose from 'mongoose';

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://makcollins16:fb7BgPaSFFHrGf0z@fooddelivery.mqvogiz.mongodb.net/food-del')
    .then((console.log('DB connected')))
}