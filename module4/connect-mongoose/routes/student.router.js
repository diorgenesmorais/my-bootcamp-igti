import express from 'express';
import { studentModel } from '../models/student.model.js';

const app = express();

app.post('/', async (req, res) => {
    try {
        const student = new studentModel(req.body);
        await student.save();
        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/', async (req, res) => {
    try {
        const student = await studentModel.find();
        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.patch('/:id', async (req, res) => {
    try {
        const student = await studentModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

export { app as studentRouter };
