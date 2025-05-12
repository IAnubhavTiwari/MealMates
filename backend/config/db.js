import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://Anubhav:Anubhav@cluster0.kdite.mongodb.net/').then(()=>console.log("DB Connected"))
}