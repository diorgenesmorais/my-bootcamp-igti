"use strict";
import express from 'express';
import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;
const fileName = 'data/grades.json';

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { subject, type } = req.query;
        const data = JSON.parse(await readFile(fileName));
        const list = data.grades.filter(grade => {
            return grade.subject === subject && grade.type === type;
        });
        const total = list.reduce((acc, curr) => {
            return acc += curr.value;
        }, 0);
        res.send({ subject, type, average: total / list.length });
    } catch (error) {
        next(error);
    }
});

router.use((err, req, res, next) => {
    res.status(400).send({ error: err.message });
});

export default router;
