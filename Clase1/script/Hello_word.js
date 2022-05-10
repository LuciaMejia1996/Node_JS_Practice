'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  //La respuesta del servidor que si es 200 es correcto
  res.statusCode = 200;
  //Lo que contiene el archivo a ejecutar
  res.setHeader('Content-type', 'text/plain');
  res.end('Hola Mundo');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
