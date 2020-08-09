"use strict";
import express from 'express';

const router = express.Router();

router.post('/', async (req, res, next) => {
    next(new Error('Teste erro'));
});

router.use((err, req, res, next) => {
    res.status(400).send({ error: err.message });
});

export default router;
