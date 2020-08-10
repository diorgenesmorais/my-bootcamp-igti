"use strict";
import express from 'express';
import { promises as fs } from 'fs';
const { readFile } = fs;
const fileName = 'data/grades.json';

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { subject, type } = req.query;
        const data = JSON.parse(await readFile(fileName));
        const list = data.grades.filter(grade => {
            return grade.subject === subject && grade.type === type;
        }).sort((a, b) => b.value - a.value);
        res.send({ ...list });
    } catch (error) {
        next(error);
    }
});

router.use((err, req, res, next) => {
    res.status(400).send({ error: err.message });
});

export default router;