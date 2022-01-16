const express = require("../front-end/node_modules/express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("../front-end/node_modules/cors");
const { Server } = require("../front-end/node_modules/socket.io");
app.use(cors());
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methodsa: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("Now THIS is pod racing");
});