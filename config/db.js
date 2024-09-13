import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully Connected to Database");
        
        
    } catch (error) {
       console.log(error);
    }
}

export default connectDB;