// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})






















/*
//from chat gpt
// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from './db/index.js';
import express from "express";

dotenv.config({
    path: './env'
});

const app = express();

(async () => {
    try {
        await connectDB(); // Connect to MongoDB
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Initialization error:", error);
    }
})();
*/









/*
// import these to use the following code
import mongoose from 'mongoose';
import {DB_NAME} from './constants'

import express from "express"
const app = express()
;(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
           console.log(`App is Listing on port`)
        })

    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
} )() // ; before this is a good practice

*/