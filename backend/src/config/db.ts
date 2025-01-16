import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Load environment variables

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "";
    await mongoose.connect(uri);  // No need to specify options
    console.log("MongoDB Atlas Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
