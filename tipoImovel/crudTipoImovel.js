const express = require('express');
const TipoImovel = require('./dadosTipoImoveis');
//rota para buscar tipo de imoveis
const router = express.Router();
router.get('/tipoImovel', async (requisicao, resposta) => {
    const tipoImovel = await TipoImovel.findAll();
    resposta.send(tipoImovel);
});
//rota para buscar tipo de imoveis por Id
router.get('/tipoImovel/:tipoId', async (req, res) => {
    const codigoTipoImovel = req.params.tipoId;
    res.json(await TipoImovel.findByPk(codigoTipoImovel));
});
//rota para cadastrar um tipo de imovel
router.post('/tipoImovel', (req, res) => {
    TipoImovel.create({
        descricao: req.body.descricao
    }).then(() => {
        res.send('Tipo de imovel cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
//rota para atualizar tipo de imovel
router.put('/tipoImovel/:tipoId', (req, res) => {
    const codigoTipoImovel = req.params.tipoId;
    TipoImovel.update({
        descricao: req.body.descricao
    }, {
        where: {
            codTipoImovel: codigoTipoImovel
        }
    }).then(() => {
        res.send('Tipo de imovel atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
//rota para deletar um tipo de imovel
router.delete('/tipoImovel/:tipoId', (req, res) => {
    const codigoTipoImovel = req.params.tipoId;
    TipoImovel.destroy({ where: { codTipoImovel: codigoTipoImovel } }).then(() => {
        res.send('Tipo de imovel removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;