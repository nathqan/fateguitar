const express = require("express");
const mongoose = require('mongoose');
const Form = require("./models/Form");
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require("dotenv");
dotenv.config();
const MONGO_CNSTRING = process.env.DATABASE_URL;


const app = express();

app.use(express.static(__dirname + '/src/public'));
app.use(bodyParser.urlencoded({extended: true}))
mongoose.connect(MONGO_CNSTRING)


app.post('/contato', async (req, res) => {
    const {nome, data, email, mensagem} = req.body

    const message = await Form.create({
        nome: nome, data: data, email: email, mensagem: mensagem
    })

    console.log(message);

    res.sendFile(path.join(__dirname+"/src/index.html"))
})

app.get('/contato', async (req, res) => {

    const mensagens = await Form.find()

    console.log(mensagens)

    res.sendFile(path.join(__dirname+"/src/contato.html"))
})

app.get('/guitarras', (req, res) => {
    res.sendFile(path.join(__dirname+"/src/guitarras.html"))
})

app.get('/orcamento', (req, res) => {
    res.sendFile(path.join(__dirname+"/src/orcamento.html"))
})

app.get('/seguros', (req, res) => {
    res.sendFile(path.join(__dirname+"/src/seguros.html"))
})

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname+"/src/sobre.html"))
})

app.get('/termos', (req, res) => {
    res.sendFile(path.join(__dirname+"/src/termos.html"))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+"/src/index.html"))
})

app.listen(5500)

