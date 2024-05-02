/*const http=require('http');
const data=require('./data');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(json.stringify(data));
    res.end();
}).listen(5100);*/
const http = require('http');

const PORT = 5000; // Define the port number you want to use

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
    // You can try another port or handle the error as needed
  } else {
    console.error('An unexpected error occurred:', error);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
