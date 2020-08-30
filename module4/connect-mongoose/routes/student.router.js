import express from 'express';
import { studentModel } from '../models/student.model.js';

const app = express();

app.post('/student', async (req, res) => {
    try {
        const student = new studentModel(req.body);
        student.save();
    } catch (error) {
        res.status(500).send(error);
    }
})

export { app as studentRouter };
