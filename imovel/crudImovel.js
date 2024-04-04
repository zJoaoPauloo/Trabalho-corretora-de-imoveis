
const express = require('express');
const Imovel = require('./dadosImovel');

const router = express.Router();
//buscar todos imoveis dispoiniveis 
router.get('/imovel', async (requisicao, resposta) => {
    const imovel = await Imovel.findAll();
    resposta.send(imovel);
});
//buscar um imovel pelo ID
router.get('/imovel/:imovelId', async (req, res) => {
    const codigoImovel = req.params.imovelId;
    res.json(await Imovel.findByPk(codigoImovel));
});
//cadastrar um novo imovel
router.post('/imovel', (req, res) => {
    Imovel.create({
        descricao: req.body.descricao,
        areaMetros: req.body.areaMetros,
        codTipoImovel: req.body.codTipoImovel,
        codEndereco: req.body.codEndereco
    }).then(() => {
        res.send('Imovel cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
//Atualizar um imovel pelo ID
router.put('/imovel/:imovelId', (req, res) => {
    const codigoImovel = req.params.imovelId;
    Imovel.update({
        descricao: req.body.descricao,
        areaMetros: req.body.areaMetros,
        codTipoImovel: req.body.codTipoImovel,
        codEndereco: req.body.codEndereco
    }, {
        where: {
            codImovel: codigoImovel
        }
    }).then(() => {
        res.send('Imovel atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
//deletar um imovel pelo ID
router.delete('/imovel/:imovelId', (req, res) => {
    const codigoImovel = req.params.imovelId;
    Imovel.destroy({ where: { codImovel: codigoImovel } }).then(() => {
        res.send('Imovel removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;
