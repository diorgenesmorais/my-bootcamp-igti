"use strict";
import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    res.status(201).send('conta criar');
});

export default router;
