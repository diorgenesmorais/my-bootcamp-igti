"use script";
import express from "express";

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('API started!');
});