// Importando o módulo HTTP
const http = require('http');

// Criando um servidor que responde com "hello world" para todas as requisições
http.createServer((req, res) => {
    //definindo o cabeçalho da resposta com status 200 (OK) e tipo de conteudo text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //enviando a resposta "hello world"
    res.end('ola, mundo!');
    //adicionando um log no console para cada requisição recebida
}).listen(8080);
console.log('Servidor rodando em http://localhost:8080/');