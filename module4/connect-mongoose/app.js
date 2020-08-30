import express from 'express';

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => {
    console.log('API started');
})