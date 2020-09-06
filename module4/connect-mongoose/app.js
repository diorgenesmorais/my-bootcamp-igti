import express from 'express';
import { studentRouter } from './routes/student.router.js';
import mongoose from 'mongoose';

const { USERDB, PASSDB, PORT } = process.env;

(async () => {
    try {
        await mongoose.connect(`mongodb+srv://${USERDB}:${PASSDB}@cluster0.e2zaw.mongodb.net/grades?retryWrites=true&w=majority`, {
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
app.use('/student', studentRouter);

app.listen(PORT, () => {
    console.log('API started');
})