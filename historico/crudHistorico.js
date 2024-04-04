
const express = require('express');
const Historico = require('./dadosHistorico');

const router = express.Router();
//buscar todos históricos 
router.get('/historico', async (req, res) => {
    const historico = await Historico.findAll();
    res.send(historico);
});
//bucar um historico pelo ID
router.get('/historico/:historicoId', async (req, res) => {
    const codigoHistorico = req.params.historicoId;
    res.json(await Historico.findByPk(codigoHistorico));
});
//cadastrar um novo hitórico
router.post('/historico', (req, res) => {
    Historico.create({
        codImovel: req.body.codImovel,
        codCorretor: req.body.codCorretor,
        dataNegociacao: req.body.dataNegociacao,
        porcentualCommisao: req.body.porcentualCommisao
    }).then(() => {
        res.send('Historico cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
//atualizar um hitórico pelo ID
router.put('/historico/:historicoId', (req, res) => {
    const codigoHistorico = req.params.historicoId;
    Historico.update({
        codImovel: req.body.codImovel,
        codCorretor: req.body.codCorretor,
        dataNegociacao: req.body.dataNegociacao,
        porcentualCommisao: req.body.porcentualCommisao
    }, {
        where: {
            codHistorico: codigoHistorico
        }
    }).then(() => {
        res.send('Historico atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
//Deletar um histórico pelo ID
router.delete('/historico/:historicoId', (req, res) => {
    const codigoHistorico = req.params.historicoId;
    Historico.destroy({ where: { codHistorico: codigoHistorico } }).then(() => {
        res.send('Historico removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;
