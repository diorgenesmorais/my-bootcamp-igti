"use strict";
import express from 'express';
import { promises as fs } from 'fs';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let account = req.body;
        const data = JSON.parse(await fs.readFile(global.fileName));
        account = { id: data.nextId++, ...account };
        data.accounts.push(account);
        await fs.writeFile(global.fileName, JSON.stringify(data, null, 2));
        res.status(201).send(account);
    } catch (error) {
        res.status(404).send({ err: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = JSON.parse(await fs.readFile(global.fileName));
        delete data.nextId;
        res.send(data);
    } catch (error) {
        res.status(400).send({ err: error.message });
    }
});

export default router;
