import express from 'express';
import { accountModel } from '../models/account.model.js';

const app = express();

app.post('/', async (req, res) => {
    try {
        const student = new accountModel.insertMany(req.body);
        await student.save();
        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/', async (req, res) => {
    try {
        const student = await accountModel.find({});
        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

// 4 - done
app.patch('/:ag/:conta', async (req, res) => {
    try {
        const { ag, conta } = req.params;
        const { balance } = req.body;
        const account = await accountModel.find({agencia: ag, conta: conta});
        if (!account) {
            res.status(404).send('Conta não existe');
        }
        await accountModel.updateOne({agencia: ag, conta: conta},{$inc: {balance: balance}});
        res.status(200).send(account);
    } catch (error) {
        res.status(500).send(error);
    }
});

// 5
app.put('/saque/:ag/:conta', async (req, res) => {
    try {
        const { ag, conta } = req.params;
        const { saque } = req.body;
        const account = await accountModel.find({agencia: ag, conta: conta});
        if (!account) {
            res.status(404).send('Conta não existe');
        }
        const c = account.toArray((err, arr) => arr);
        const totalSaque = c.balance - (saque + 1);
        console.log('Total saque:', totalSaque, balance);
        await accountModel.replaceOne(account ,{balance: totalSaque, ...account});
        res.status(200).send({ balance });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.patch('/:id', async (req, res) => {
    try {
        const student = await accountModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/:id', async (req, res) => {
    try {
        const student = await accountModel.findByIdAndDelete(req.params.id);
        if (!student) {
            res.status(404).send('Documento não encontrado');
        }
        res.send();
    } catch (error) {
        res.status(500).send(error);
    }
})

export { app as accountRouter };