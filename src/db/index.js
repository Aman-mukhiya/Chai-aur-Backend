import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        )
        console.log(`\n MongoDB connected !! DB HOST: 
            ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB


// const mongoose = require('mongoose');


// // require('dotenv').config({path: './env'})
// // import dotenv from "dotenv";
// import connectDB from './db/db/index.js';
// import express from "express";
// dotenv.config({
//     path: './env'
// });
// const app = express();
// (async () => {
//     try {
//         await connectDB(); // Connect to MongoDB
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("Initialization error:", error);
//     }
// })();

// export default connectDB
