"use script";
import express from "express";

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.post('/hello', (req, res) => {
    res.send('Você realizou um post');
})

app.listen(3000, () => {
    console.log('API started!');
});