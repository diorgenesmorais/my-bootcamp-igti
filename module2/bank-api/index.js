"use strict";
import express from 'express';
import { promises as fs } from 'fs';
import accountsRouter from './router/accounts.js';

global.fileName = 'accounts.json';

const { readFile, writeFile } = fs;
const app = express();
app.use(express.json());

app.use('/account', accountsRouter);

app.listen(3000, async () => {
    try {
        await readFile(global.fileName);
        console.log('API started');
    } catch (error) {
        const initialJson = {
            nextId: 1,
            accounts: []
        }
        await writeFile(global.fileName, JSON.stringify(initialJson));
        console.log('API started and file accounts.json');
    }
})