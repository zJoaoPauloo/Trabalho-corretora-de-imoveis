const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Clientes = require('../cliente/dadosClientes');
const Imovel = require('../imovel/dadosImovel');
//cria a tabela visitas
const Visita = conexao.define('visitas', {
    codCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references:{
            model: Clientes,
            key: 'codCliente'
        },
        onDelete: 'CASCADE'   
    },
    codImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references:{
            model: Imovel,
            key: 'codImovel'
        },
        onDelete: 'CASCADE'   
    },
    visitaRealizada: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    dataVisita:{
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false
});

Visita.sync({ force: false });

module.exports = Visita;