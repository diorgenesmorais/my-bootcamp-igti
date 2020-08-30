import express from 'express';
import mongoose from 'mongoose';

const app = express();

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

app.use(express.json());

app.listen(3000, () => {
    console.log('API started');
});