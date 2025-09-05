
const http = require('http');

http.get('http://jsonplaceholder.typicode.com/todos/1', (res) => {
    let data = '';

    // um pedaço de dado foi recebido.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // A resposa inteira foi recebida. imprima o resultado.
    res.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on('error', (err) => {
    console.log("Error: " + err.message);
});