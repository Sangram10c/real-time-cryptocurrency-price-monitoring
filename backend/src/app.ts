import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cryptoRoutes from "./routes/cryptoRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/crypto", cryptoRoutes);

export default app;
