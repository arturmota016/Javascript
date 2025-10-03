//importa o modulo http nativo do Node.js
import http from 'http'

const PORT = 3000;

//cria o servidor
const server = http.createServer((request, Response)=>{
    const url = request.url;
    const method = request.method;

    //define o cabeçalho da resposta como HTML
    Response.setHeader('content-type','text/html; charset=utf-8');

    //roteamento básico
if (url === '/'){
    Response.statuscode = 200;//ok
    Response.end('<h1>página Inicial</h1>');

}else if (url === '/sobre' && method === 'GET'){
    Response.statuscode = 200; //ok
    Response.end('<h1>sobre Nós</h1><p>Esta é uma aplicação de exemplo com Node.js puro.</p>');

}else if (url === '/contato'){
    Response.statuscode = 200;//ok
    Response.end('<h1>Fale Conosco</h1>');

}else {
    //se nenhuma rota corresponder
    Response.statuscode = 404;//Not found
    Response.end('<h1>404 - Página Não Encontrada</h1>');
}
});

//inicia o servidor para ouvir na porta definida
server.listen(PORT, () =>{
    console.log(`Servidor Rodando em http://localhost:${PORT}`);
});