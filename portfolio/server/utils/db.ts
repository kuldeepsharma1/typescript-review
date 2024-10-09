import mongoose from "mongoose";
require('dotenv').config();

const dbUrl:string = process.env.MONGO_DB || '';

const connectDB = async ()=> {
    try{
        await mongoose.connect(dbUrl).then((data:any)=>{
            console.log(`Databse connected with ${data.connection.host}`)
        })
    } catch (error:any){
        console.log(error.message);
        setTimeout(connectDB,5000);
    }
}

export default connectDB;