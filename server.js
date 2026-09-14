// Servidor mínimo (sem dependências) para o painel interno da Bursty.
// Serve dois arquivos estáticos:
//   /            -> index.html  (Central de Operações — todos os clientes)
//   /boost.html  -> boost.html  (Painel Boost — Ciência de Dados)
// O Railway define a variável PORT automaticamente; aqui apenas a usamos.

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const FILES = {
  '/boost.html': path.join(__dirname, 'boost.html'),
  '/boost': path.join(__dirname, 'boost.html')
};
const INDEX = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  // Healthcheck simples (Railway/monitoramento)
  if (req.url === '/health' || req.url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
    return;
  }

  const cleanUrl = req.url.split('?')[0];
  const filePath = FILES[cleanUrl] || INDEX;

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Erro ao carregar a página.');
      return;
    }
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store'
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('Painel interno Bursty no ar na porta ' + PORT);
});
