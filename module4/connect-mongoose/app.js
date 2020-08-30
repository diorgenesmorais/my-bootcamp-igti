import express from 'express';
import { studentRouter } from './routes/student.router.js';

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => {
    console.log('API started');
})