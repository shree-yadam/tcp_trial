const net = require("net");

const conn = net.createConnection({
  host: "192.168.0.222",
  port: 3000
});

conn.setEncoding("utf8");
conn.on("data", (data) => {
  console.log("Server says: ", data);
  conn.write("Hello!");
})