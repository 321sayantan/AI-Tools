import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import dotenv from "dotenv";
import connectDB from "./config/db.js"; 


dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
