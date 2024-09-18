import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import authRoutes from './routes/authRoutes.js';
import genAiRoutes from './routes/genAiRoutes.js';
import errorHandler from './middlewares/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(morgan('dev')); 
app.use(errorHandler);


app.use(express.static(path.join(process.cwd(), 'public'), {
    maxAge: 0 
  }));
  

const PORT = process.env.PORT || 5000;

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/genAi', genAiRoutes); 

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
