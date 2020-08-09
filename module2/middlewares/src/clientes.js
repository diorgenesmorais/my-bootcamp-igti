"use strict";
const client = {
    all: function(req, res) {
        res.send('Listar todos os clientes');
    },
    add: function(req, res) {
        console.log(req.body);
        const { nome } = req.body;
        res.send(`${nome} Cliente adicionado`);
    }
}

export default client;
