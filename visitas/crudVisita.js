const express = require('express');
const Visita = require('./dadosVisita');

const router = express.Router();
//rota para buscar as visitas
router.get('/visita', async (req, res) => {
    const visita = await Visita.findAll();
    res.send(visita);
});
//rota para buscar uma rota por Id
router.get('/visita/:imovelId1/:clienteId2', async (req, res) => {
    const codigoImovel = req.params.imovelId1;
    const codigoCliente = req.params.clienteId2;
    res.json(await Visita.findAll({
        where: {
            codCliente: codigoCliente,
            codImovel: codigoImovel
        }
    }));
});
//rota para cadastrar novas visitas
router.post('/visita', (req, res) => {
    Visita.create({
        codCliente: req.body.codCliente,
        codImovel: req.body.codImovel,
        descricao: req.body.descricao,
        visitaRealizada: req.body.visitaRealizada,
        dataVisita: req.body.dataVisita,
        codEndereco: req.body.codEndereco
    }).then(() => {
        res.send('Visita cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
//rota para atualizar uma visita
router.put('/visita/:imovelId1/:clienteId2', (req, res) => {
    const codigoImovel = req.params.imovelId1;
    const codigoCliente = req.params.clienteId2;
    Visita.update({
        codCliente: codigoCliente,
        codImovel: codigoImovel,
        descricao: req.body.descricao,
        visitaRealizada: req.body.visitaRealizada,
        dataVisita: req.body.dataVisita,
        codEndereco: req.body.codEndereco
    }, {
        where: {
            codCliente: codigoCliente,
            codImovel: codigoImovel
        }
    }).then(() => {
        res.send('Visita atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});
//rota para deletar uma visita
router.delete('/visita/:imovelId1/:clienteId2', (req, res) => {
    const codigoVisita = req.params.visitaId;
    Visita.destroy({ where: {codCliente: codigoCliente,codImovel: codigoImovel} }).then(() => {
        res.send('Visita removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;