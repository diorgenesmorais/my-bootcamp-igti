import express from 'express';
import { studentRouter } from './routes/student.router.js';
import mongoose from 'mongoose';

(async () => {
    try {
        await mongoose.connect('mongodb+srv://chaveirinho:mi@Rapariga@cluster0.e2zaw.mongodb.net/grades?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado ao MongoDB com sucess!');
    } catch (error) {
        console.log('Erro ao conectar no MongoDB', error);
    }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => {
    console.log('API started');
})