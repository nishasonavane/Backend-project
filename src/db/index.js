import mongoose from "mongoose";
import { Db_Name } from "../constants.js";

const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${Db_Name}`)
        console.log(`\n MongoDb connected !! DB Host :${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGODB CONNECTION ERROR ",error);
        process.exit(1)
    }
}
export default connectDB