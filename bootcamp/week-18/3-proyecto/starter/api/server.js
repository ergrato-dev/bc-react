/**
 * API Mock para el Proyecto Semanal
 * Adapta los datos a tu dominio
 */

const http = require('http');

const PORT = 8080;

// Datos mock - TODO: Adaptar a tu dominio
const items = [
  { id: 1, name: 'Item 1', description: 'Descripción del item 1' },
  { id: 2, name: 'Item 2', description: 'Descripción del item 2' },
  { id: 3, name: 'Item 3', description: 'Descripción del item 3' },
  { id: 4, name: 'Item 4', description: 'Descripción del item 4' },
];

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  if (req.url === '/api/items' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify(items));
  } else if (req.url === '/api/health' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ status: 'ok' }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 API running on port ${PORT}`);
});
