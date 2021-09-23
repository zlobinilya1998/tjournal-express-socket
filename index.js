const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("new-post", (msg) => {
    io.emit("new-post", msg);
  });
});

server.listen(8081, () => {
  console.log("Server has been started on port 8081");
});
