"use strict";
import express from 'express';
import { promises as fs, read } from 'fs';
const { readFile, writeFile } = fs;
const fileName = 'data/grades.json';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        let grade = req.body;
        const datas = JSON.parse(await readFile(fileName));
        const timestamp = new Date();
        grade = { id: datas.nextId++, ...grade, timestamp };
        datas.grades.push(grade);
        await writeFile(fileName, JSON.stringify(datas, null, 2));
        res.send(datas);
    } catch (error) {
        next(error);
    }
});

router.use((err, req, res, next) => {
    res.status(400).send({ error: err.message });
});

export default router;
