import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import bahanaRoute from './routes/bahanaRoute';

dotenv.config();

const app = express();
app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));


app.use(morgan('combined')); 
app.use(cors({
  origin: ["http://localhost:5173", "https://bahanai.vercel.app"],
  credentials: true,
  
})); 
app.use(helmet());


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use("/api",bahanaRoute);
            
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

    