"use strict";
import express from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;
const app = express();
app.use(express.json());

app.listen(3000, async () => {
    try {
        await readFile('accounts.json');
        console.log('API started');
    } catch (error) {
        const initialJson = {
            nextId: 1,
            accounts: []
        }
        await writeFile('accounts.json', JSON.stringify(initialJson));
        console.log('API started and file accounts.json');
    }
})