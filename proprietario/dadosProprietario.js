
const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = require('../endereco/dadosEnderecos')
//cria a tabela proprietario 
const Proprietario = conexao.define('Proprietario', {
    codProprietario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    CPF:{
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
    },
    CNPJ:{
        type: Sequelize.STRING(14),
        allowNull: false
    },
    dataNascimento:{
        type: Sequelize.DATE,
        allowNull: false
    },
    codEndereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Endereco,
            key: 'codEndereco',
        },
        onDelete: 'CASCADE'   
    }
}, {
    timestamps: false
});

Proprietario.sync({ force: false });

module.exports = Proprietario;
