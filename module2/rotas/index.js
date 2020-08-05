"use script";
import express from "express";
import { promises as fs } from "fs";

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.post('/hello', (req, res) => {
    res.send('Você realizou um post');
});

async function foundParceiros(cpf) {
    let parceiros = [];
    try {
        parceiros = JSON.parse(await fs.readFile('./data/parceiros.json', 'utf-8'));
        return parceiros.find(pn => {
            return pn.cpf === cpf;
        });
    } catch (error) {
        throw new Error('Erro');
    }
}

async function foundInSerpro(cpf) {
    try {
        const cidadaos = JSON.parse(await fs.readFile('./data/serpro.json', 'utf-8'));
        return cidadaos.find(cidadao => {
            return cidadao.cpf === cpf;
        });
    } catch (error) {
        console.log('Erro ao ler arquivo serpro', error);
    }
}

async function consultarParceiro(req, res, next) {
    const { cpf } = req.query;
    if (cpf) {
        let pn = await foundParceiros(cpf);
        if (pn) {
            res.send(`Este ${cpf} já está cadastrado`);
        } else {
            next();
        }
    }
}

async function consultaSerpro(req, res) {
    const { cpf } = req.query;
    if (!cpf) {
        res.send('Você precisa informar um cpf');
    }
    const cidadao = await foundInSerpro(cpf);
    if (cidadao) {
        res.send(`${cidadao.nome} com cpf ${cidadao.cpf} está ${cidadao.status}`);
    } else {
        res.send(`${cpf} não está na base dados do Serpro`);
    }
}

app.get("/client", consultarParceiro, consultaSerpro);

app.listen(3000, () => {
    console.log('API started!');
});