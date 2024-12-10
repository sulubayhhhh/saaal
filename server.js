// Импортируем модуль http
const http = require('http');

// Устанавливаем порт
const PORT = 3000;

// Создаем сервер
const server = http.createServer((req, res) => {
  // Устанавливаем заголовки ответа
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello, World!</h1>');
});

// Запускаем сервер
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
