
const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Clientes = require('../cliente/dadosClientes');
const Imovel = require('../imovel/dadosTipoImoveis');
const Corretor = require('../corretor/dadosCorretor')
//cria tabela dos históricos de vendas 
const Historico = conexao.define('historicos', {
    codHistorico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    codImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: Imovel,
            key: 'codImovel'
        },
        onDelete: 'CASCADE'   
    },
    codCorretor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: Corretor,
            key: 'codCorretor'
        },
        onDelete: 'CASCADE'   
    },
    dataNegociacao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    porcentualCommisao:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false
});

Historico.sync({ force: false });

module.exports = Historico;
