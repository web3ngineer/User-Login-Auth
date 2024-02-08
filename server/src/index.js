import express  from "express";
import mongoose from "mongoose";
import connectDB from "./dbConnect/connect.js";
import dotenv from "dotenv"
import { app } from "./app.js";

dotenv.config({
    path: './.env',
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 7000, () => {
        console.log(`server is running at http://localhost:${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!!", err);
})