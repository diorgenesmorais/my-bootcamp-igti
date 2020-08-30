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
        require: true
    }
});

const acoountModel = mongoose.model('accounts', accountSchema);

export { acoountModel };