import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
    agencia: {
        type: Number,
        require: true
    },
    conta: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    balance: {
        type: Number,
        require: true,
        validate(value) {
            if (value < 0)
                throw new Error('O valor de balance não pode ser negativo');
        }
    }
});

const accountModel = mongoose.model('accounts', accountSchema);

export { accountModel };