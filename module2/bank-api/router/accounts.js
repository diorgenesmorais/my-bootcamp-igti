"use strict";
import express from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let account = req.body;
        const data = JSON.parse(await readFile(global.fileName));
        account = { id: data.nextId++, ...account };
        data.accounts.push(account);
        await writeFile(global.fileName, JSON.stringify(data, null, 2));
        res.status(201).send(account);
    } catch (error) {
        res.status(404).send({ err: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        delete data.nextId;
        res.send(data);
    } catch (error) {
        res.status(400).send({ err: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = JSON.parse(await readFile(global.fileName));
        delete data.nextId;
        const found = data.accounts.find(account => account.id === parseInt(id));
        res.send(found);
    } catch (error) {
        res.status(400).send({ err: error.message });
    }
});

export default router;
