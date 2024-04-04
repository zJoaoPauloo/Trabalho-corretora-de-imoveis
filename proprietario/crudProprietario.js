
const express = require('express');
const Proprietario = require('./dadosProprietario');

const router = express.Router();
//busca todos os proprietarios 
router.get('/proprietario', async (req, res) => {
    const proprietario = await Proprietario.findAll();
    res.send(proprietario);
});
//busca um proprietario pelo ID
router.get('/proprietario/:propId', async (req, res) => {
    const codigoProprietario = req.params.propId;
    res.json(await Proprietario.findByPk(codigoProprietario));
});
//cadastra um novo proprietario 
router.post('/proprietario', (req, res) => {
    Proprietario.create({
        nome: req.body.nome,
        CPF: req.body.CPF,
        CNPJ: req.body.CNPJ,
        dataNascimento: req.body.dataNascimento,
        codEndereco: req.body.codEndereco
    }).then(() => {
        res.send('Proprietario cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
//atualiza um proprietario pelo id
router.put('/proprietario/:propId', (req, res) => {
    const codigoProprietario = req.params.propId;
    Proprietario.update({
        nome: req.body.nome,
        CPF: req.body.CPF,
        CNPJ: req.body.CNPJ,
        dataNascimento: req.body.dataNascimento,
        codEndereco: req.body.codEndereco
    }, {
        where: {
            codProprietario: codigoProprietario
        }
    }).then(() => {
        res.send('Proprietario atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
// deleta um proprietario 
router.delete('/proprietario/:propId', (req, res) => {
    const codigoProprietario = req.params.propId;
    Proprietario.destroy({ where: { codProprietario: codigoProprietario } }).then(() => {
        res.send('Proprietario removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;
