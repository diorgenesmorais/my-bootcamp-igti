"use strict";
import express from 'express';
import gradesRouter from './src/grades.js';
import average from './src/average.js';
import bigger from './src/bigger.js';

const app = express();
app.use(express.json());

app.use('/grades', gradesRouter);
app.use('/average', average);
app.use('/bigger', bigger);

app.listen(3000, () => {
    console.log('API started');
});