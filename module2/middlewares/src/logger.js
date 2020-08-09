"use strict";
import winston from "winston";

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
});

export default logger;
