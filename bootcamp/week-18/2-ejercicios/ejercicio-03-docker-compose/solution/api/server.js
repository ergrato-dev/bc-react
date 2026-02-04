/**
 * API Mock Server - SOLUCIÓN
 */

const http = require('http');

const PORT = 8080;

const items = [
  { id: 1, name: 'Docker', description: 'Plataforma de containerización' },
  {
    id: 2,
    name: 'React',
    description: 'Biblioteca para interfaces de usuario',
  },
  { id: 3, name: 'PostgreSQL', description: 'Base de datos relacional' },
  { id: 4, name: 'Nginx', description: 'Servidor web de alto rendimiento' },
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
    res.end(
      JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }),
    );
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 API Server running on port ${PORT}`);
});
