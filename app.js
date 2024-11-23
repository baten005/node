const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log(`New client connected: ${socket.id}`);
  socket.on("scoreUpdate", (scoreData) => {
    console.log("Score update received from admin:", scoreData);
    io.emit("fetchScores", scoreData);
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

app.get("/", (req, res) => {
  res.send("Socket.IO Server is running!");
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
