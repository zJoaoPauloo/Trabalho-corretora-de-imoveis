const espresso = require('express');

const meuServidor = espresso();
meuServidor.use(espresso.json());

const rotasTiposImoveis = require('./tipoImovel/crudTipoImovel');
meuServidor.use(rotasTiposImoveis);

const rotasImoveis = require('./imovel/crudImovel');
meuServidor.use(rotasImoveis);

const rotasProprieatario = require('./proprietario/crudProprietario');
meuServidor.use(rotasProprieatario);

const rotasCliente = require('./cliente/crudCliente');
meuServidor.use(rotasCliente);

const rotasEnderecos = require('./endereco/crudEndereco');
meuServidor.use(rotasEnderecos);


const rotasVisita = require('./visitas/crudVisita');
meuServidor.use(rotasVisita);

meuServidor.listen(4300, () => {
    console.log('Meu primeiro servidor na porta 4300.');
});