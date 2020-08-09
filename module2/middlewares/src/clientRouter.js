"use strict";
import express from "express";
import client from "./clientes.js";
import logger from "./logger.js";

const router = express.Router();

function throwErr(err, req, res, next) {
    logger.warn(err);
    res.status(500).send('Ocorreu um error');
}

router.get('/', client.all);

router.post('/', client.add);

// tratar o erro nesta camada.
router.use(throwErr);

export default router;
