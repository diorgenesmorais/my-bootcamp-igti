"use strict";
import express from "express";
import clientRouter from "./src/clientRouter.js";

const app = express();
app.use(express.json());

app.use('/clientes', clientRouter);

app.listen(3000, () => {
    console.log('API started');
});
