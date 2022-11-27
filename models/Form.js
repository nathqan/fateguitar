const mongoose = require('mongoose');

const Form = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    data: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mensagem: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Form", Form)