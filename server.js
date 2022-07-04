const net = require("net");
const server = net.createServer();

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});

server.on("connection", (client) => {
  console.log("New connection established");
  client.write("Welcome!");
  client.setEncoding("utf8");
  client.on("data", (data) => {
    console.log("client says: ", data);
  });
});

