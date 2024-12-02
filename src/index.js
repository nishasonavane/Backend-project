//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "tailwind"

dotenv.config({
    path:"./env"
})






connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at Port ${process.env.PORT}`);
    })

})
.catch(()=>{
    console.log("MongoDb connection Failed !!!", error);
})


/*
import express from "express";

const app = express()
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${Db_Name}`)
        app.on("error",(error)=>{
            console.log("Error",error);
            throw error
        })
app.listen(process.env.PORT,()=>{
    console.log(`App is listning on port ${process.env.PORT}`);
})
       
    }
    catch(error){
        console.error("error",error)
        throw error
    }

})()
    */