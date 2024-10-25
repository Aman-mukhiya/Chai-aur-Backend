import mongoose from "mongoose";
import dotenv from 'dotenv'
import { DB_NAME } from "../constants.js";

dotenv.config();

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect
       (`${process.env.MONGODB_URI}/${DB_NAME}`)

       // checking whats inside connectionInstance
       // console.log("This is connectionInstance :", connectionInstance);
       
       console.log(`\n MongoDB connected !!! DB HOST: 
       ${connectionInstance.connection.host}`)// this checks which host i am connected
    
    } catch (error) {
        console.log("MONGODB connection error", error)
        process.exit(1)
    }
}

export default connectDB