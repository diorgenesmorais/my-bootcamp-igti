"use strict";
import express from "express";
import clientRouter from "./src/clientRouter.js";

const app = express();
app.use(express.json());

app.use('/clientes', clientRouter);

// Tratar os erros da próxima camada
app.use((err, req, res, next) => {
    // TODO: como tratar o objeto err? Informando qual camada ocorreu o erro.
    console.log('ERROR');
});

app.listen(3000, () => {
    console.log('API started');
});
