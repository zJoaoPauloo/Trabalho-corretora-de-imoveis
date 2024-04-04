
const express = require('express');
const Corretor = require('./dadosCorretor');

const router = express.Router();
//buscar todos os corretores
router.get('/corretor', async (req, res) => {
    const corretor = await Corretor.findAll();
    res.send(corretor);
});
//buscar um corretor pelo ID
router.get('/corretor/:corretorId', async (req, res) => {
    const codigoCorretor = req.params.corretorId;
    res.json(await Corretor.findByPk(codigoCorretor));
});
//cadastrar um corretor
router.post('/corretor', (req, res) => {
    Corretor.create({
        nome: req.body.nome,
        CPF: req.body.CPF,
        CNPJ: req.body.CNPJ,
        dataNascimento: req.body.dataNascimento,
        codEndereco: req.body.codEndereco
    }).then(() => {
        res.send('Corretor cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
//Atualizar um corretor 
router.put('/corretor/:corretorId', (req, res) => {
    const codigoCorretor = req.params.corretorId;
    Corretor.update({
        nome: req.body.nome,
        CPF: req.body.CPF,
        CNPJ: req.body.CNPJ,
        dataNascimento: req.body.dataNascimento,
        codEndereco: req.body.codEndereco
    }, {
        where: {
            codCorretor: codigoCorretor
        }
    }).then(() => {
        res.send('Corretor atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
// deletar um corretor pelo ID
router.delete('/corretor/:corretorId', (req, res) => {
    const codigoCorretor = req.params.corretorId;
    Corretor.destroy({ where: { codCorretor: codigoCorretor } }).then(() => {
        res.send('Corretor removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;
