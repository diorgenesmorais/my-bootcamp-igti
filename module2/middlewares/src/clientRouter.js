"use strict";
import express from "express";
import client from "./clientes.js";
import winston from "winston";

const router = express.Router();
const { combine, printf, label, timestamp } = winston.format;

const myFormat = printf(({ level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
    level: "warn",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "logs.log" })
    ],
    format: combine(
        label({ label: "Client app"}),
        timestamp(),
        myFormat
    )
})

function throwErr(err, req, res, next) {
    logger.warn(err);
    res.status(500).send('Ocorreu um error');
}

router.get('/', client.all);

router.post('/', client.add);

// tratar o erro nesta camada.
router.use(throwErr);

export default router;
