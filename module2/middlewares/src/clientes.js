"use strict";
const client = {
    all: function(req, res) {
        res.send('Listar todos os clientes');
    },
    add: function(req, res, next) {
        const { nome } = req.body;
        if (!nome) {
            next('Não foi enviado um corpo na requisição');
        }
        console.log('Corpo da requisição', req.body);
        res.send(`${nome} Cliente adicionado`);
    }
}

export default client;
