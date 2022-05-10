const http = require('http');
const fs = require('fs');
const { hostname } = require('os');
const port = 3000;

///Preguntar porque no puedo crear una constant paRA Luego llamarla en otro metodo
http
  .createServer((req, res) => {
    //TTengo que preguntar esta parte de aqui pues no la entiendo ni madres
    let name = require('url').parse(req.url, true).query.name;
    if (name === undefined) name = 'mundo';
    if (name == 'burningbird') {
      const file = './img/fenix.jpg';
      fs.stat(file, function (err, stat) {
        if (err) {
          console.error(err);
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Lo sentimos, El pájaro voló y se fue');
        } else {
          const img = fs.readFileSync(file);
          res.contentType = 'image/jpg';
          res.contentLength = stat.size;
          res.end(img, 'binary');
        }
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hola ' + name + '\n');
    }
  })
  .listen(port);

console.log(`${hostname}:${port}/name;burningbird`);
