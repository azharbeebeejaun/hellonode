var http = require('http');


http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Basic node server works!');
}).listen(8080);

console.log('Server running on port 8080');
