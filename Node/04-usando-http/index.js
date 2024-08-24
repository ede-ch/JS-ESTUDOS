const {createServer} = require('http');

let server = createServer((request, response) => {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
        <h1>Hello World!</h1>
        <p>Primeira página com Node.js</p>
    `);
    response.end();

});

server.listen(3000);

console.log("Ouvindo a porta 3000");