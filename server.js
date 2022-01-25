const express = require("express");
const app = express();
const db = require("./back-end/models");
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
const { Server } = require("socket.io");

const path = require("path");
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/dist")));
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
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

require("./back-end/routes/api-routes.js")(app);

// server.listen(3002, () => {
//   console.log("Now THIS is pod racing");
// });

// routes

db.sequelize.sync().then(() => {
  server.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
  });
});
