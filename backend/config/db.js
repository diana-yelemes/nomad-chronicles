import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        //establish connection
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected!")
    } catch (error) {
        
    console.log("Database connection failed(:", error.message)
    }

}
export default connectDB