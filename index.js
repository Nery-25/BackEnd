const http = require("http");

const server = http.createServer(function (req, res) {
  console.log(req);

  res.writeHead(200);
  res.end("my response");
});

server.listen(3000, "localhost", function () {
  console.log("server is running");
});
