const http = require('http');
const server = http.createServer((request, response) => {
  let url = request.url.split('/');
  if (url[1] === '' ) {
    response.end("Hello, Galvanize!");
  }
});
server.listen(PORT = '3000', HOST = 'localhost', () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});