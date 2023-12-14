const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/image') {
    res.setHeader('Content-Type', 'image/jpeg'); 
    fs.createReadStream('./rabbit.jpeg').pipe(res); 
  } else if (req.url === '/pdf') {
    res.setHeader('Content-Type', 'application/pdf'); 
    fs.createReadStream('./homework.pdf').pipe(res); 
  } else if (req.url === '/home') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to my website');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});