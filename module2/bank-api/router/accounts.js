"use strict";
import express from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        let account = req.body;
        const data = JSON.parse(await readFile(global.fileName));
        account = { id: data.nextId++, ...account };
        data.accounts.push(account);
        await writeFile(global.fileName, JSON.stringify(data, null, 2));
        res.status(201).send(account);
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        delete data.nextId;
        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = JSON.parse(await readFile(global.fileName));
        delete data.nextId;
        const found = data.accounts.find(account => account.id === parseInt(id));
        res.send(found);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = JSON.parse(await readFile(global.fileName));
        data.accounts = data.accounts.filter(account => account.id !== parseInt(id));
        await writeFile(global.fileName, JSON.stringify(data, null, 2));
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

router.put('/', async (req, res, next) => {
    try {
        let account = req.body;
        const data = JSON.parse(await readFile(global.fileName));
        const index = data.accounts.findIndex(acc => acc.id === account.id);
        data.accounts[index] = account;
        await writeFile(global.fileName, JSON.stringify(data, null, 2));
        res.send(account);
    } catch (error) {
        next(error);
    }
});

router.patch('/updateBalance', async (req, res, next) => {
    try {
        let account = req.body;
        const data = JSON.parse(await readFile(global.fileName));
        const index = data.accounts.findIndex(acc => acc.id === account.id);
        data.accounts[index].balance = account.balance;
        await writeFile(global.fileName, JSON.stringify(data, null, 2));
        res.send(account);
    } catch (error) {
        next(error);
    }
});

router.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send({ err: err.message });
});

export default router;
