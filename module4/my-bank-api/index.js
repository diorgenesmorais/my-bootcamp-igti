import express from 'express';
import mongoose from 'mongoose';
import { accountRouter } from './router/account.router.js';

const app = express();

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

app.use(express.json());
app.use('/accounts', accountRouter);

app.listen(PORT, () => {
    console.log('API started');
});