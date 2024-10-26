import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    // checking whats inside connectionInstance
    // console.log("This is connectionInstance :", connectionInstance);

    console.log(`\n MongoDB connected !!! DB HOST: 
       ${connectionInstance.connection.host}`); // this checks which host i am connected
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB


// const mongoose = require('mongoose');


// // require('dotenv').config({path: './env'})
// // import dotenv from "dotenv";
// import connectDB from './db/index.js';
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
