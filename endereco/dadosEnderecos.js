
const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
//cria a tabela de endereços
const Endereco = conexao.define('enderecos', {
    codEndereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    
    rua: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
    
    bairro: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
    
    complemento: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    
    cep: {
        type: Sequelize.STRING(8),
        allowNull: false,
        unique:true
    },
    
    cidade: {
        type: Sequelize.STRING(65),
        allowNull: false
    },
 
    estado: {
        type: Sequelize.STRING(2),
        allowNull: false
    }
    
    }, 
    
    {
    timestamps: false
});

Endereco.sync({ force: false });

module.exports = Endereco;
