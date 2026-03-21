/**
 * API Mock Server para el ejercicio de Docker Compose
 * Servidor simple que simula una API REST
 */

const http = require('http');

const PORT = 8080;

// Datos mock
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

// Crear servidor HTTP
const server = http.createServer((req, res) => {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  // Log de requests
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  // Router simple
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

// Iniciar servidor
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 API Server running on port ${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Items:  http://localhost:${PORT}/api/items`);
});
