var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, '162.243.141.138');
console.log('Server running at http://162.243.141.138:8080/');

https://github.com/chrischris292/DigitalOcean.git