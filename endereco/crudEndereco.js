
const express = require('express');
const Enderecos = require('./dadosEnderecos');

const router = express.Router();
//buscar todos endereços
router.get('/enderecos', async (requisicao, resposta) => {
    const endereco = await Enderecos.findAll();
    resposta.send(endereco);
});
//buscar um endereço pelo ID
router.get('/enderecos/:enderecoId', async (req, res) => {
    const codigoEndereco = req.params.enderecoId;
    res.json(await Enderecos.findByPk(codigoEndereco));
});
//cadastrar um novo endereço
router.post('/enderecos', (req, res) => {
    Enderecos.create({
        estado: req.body.estado,
        cidade: req.body.cidade,
        bairro: req.body.bairro,
        rua: req.body.rua,
        complemento: req.body.complemento,
        cep: req.body.cep,
    }).then(() => {
        res.send('Endereco cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
//Atualizar um endereço pelo ID
router.put('/enderecos/:enderecoId', (req, res) => {
    const codigoEndereco = req.params.enderecoId;
    Enderecos.update({
        estado: req.body.estado,
        cidade: req.body.cidade,
        bairro: req.body.bairro,
        rua: req.body.rua,
        complemento: req.body.complemento,
        cep: req.body.cep,
    }, {
        where: {
            codEndereco: codigoEndereco
        }
    }).then(() => {
        res.send('Endereco atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
//deletar um endereço pelo ID
router.delete('/enderecos/:enderecoId', (req, res) => {
    const codigoEndereco = req.params.codigoEndereco;
    Enderecos.destroy({ where: { codEndereco: codigoEndereco } }).then(() => {
        res.send('Endereco removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;
