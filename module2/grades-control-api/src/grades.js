"use strict";
import express from 'express';
import { promises as fs } from 'fs';
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
        res.send(grade);
    } catch (error) {
        next(error);
    }
});

router.patch('/', async (req, res, next) => {
    try {
        let grade = req.body;
        const datas = JSON.parse(await readFile(fileName));
        const index = datas.grades.findIndex(subject => subject.id === grade.id);
        if (index < 0) {
            throw new Error('Registro inexistente');
        }
        const { student, subject, type, value } = grade;
        datas.grades[index].student = student;
        datas.grades[index].subject = subject;
        datas.grades[index].type = type;
        datas.grades[index].value = value;
        await writeFile(fileName, JSON.stringify(datas, null, 2));
        res.send(datas.grades[index]);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const datas = JSON.parse(await readFile(fileName));
        datas.grades = datas.grades.filter(g => g.id !== parseInt(id));
        await writeFile(fileName, JSON.stringify(datas, null, 2));
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const datas = JSON.parse(await readFile(fileName));
        const grade = datas.grades.find(g => g.id === parseInt(id));
        res.send(grade);
    } catch (error) {
        next(error);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const { student, subject } = req.query;
        const data = JSON.parse(await readFile(fileName));
        const total = data.grades.filter(grade => {
            return grade.student === student && grade.subject === subject;
        }).reduce((acc, curr) => {
            return acc += curr.value;
        }, 0);
        res.status(200).send({ student, subject, total });
    } catch (error) {
        next(error);
    }
});

router.use((err, req, res, next) => {
    res.status(400).send({ error: err.message });
});

export default router;
