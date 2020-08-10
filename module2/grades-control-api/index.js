"use strict";
import express from 'express';
import gradesRouter from './src/grades.js';
import average from './src/average.js';

const app = express();
app.use(express.json());

app.use('/grades', gradesRouter);
app.use('/average', average);

app.listen(3000, () => {
    console.log('API started');
});