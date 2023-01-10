const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'NewTechFusion Pvt Ltd\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server Node  1 running on http://localhost:${port}/`);
});
