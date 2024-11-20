import dotenv from 'dotenv';
import express from 'express';
import todoRoutes from './routes/todoRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT || 8000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Server is running on port 8000');
})
