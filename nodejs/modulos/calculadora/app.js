const modulo = require('../meuModulo'); // Importando o módulo
const calculadora_idade = require('./calculadora-idade');

const mensagem = modulo.saudacao('artur'); // Executando a função
const idade2025 = calculadora_idade.idade(2009,'artur');

console.log(mensagem);
console.log(idade2025);