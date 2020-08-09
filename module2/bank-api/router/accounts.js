"use strict";
import express from 'express';
import { promises as fs } from 'fs';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let account = req.body;
        const data = JSON.parse(await fs.readFile('accounts.json'));
        account = { id: data.nextId++, ...account };
        data.accounts.push(account);
        await fs.writeFile('accounts.json', JSON.stringify(data, null, 2));
        res.status(201).send(account);
    } catch (error) {
        res.status(404).send({ err: error.message });
    }
});

export default router;
