const express = require("express");

const { createServer } = require("http");
const { Server } = require("socket.io");

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Handle Socket.IO Events
io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);

  // Handle Join Room
  socket.on("joinRoom", (roomData) => {
    const { username, roomCode } = roomData;
    socket.join(roomCode);
    console.log(`${username} joined room ${roomCode}`);
    socket
      .to(roomCode)
      .emit("receiveMessage", `${username} has joined the chat.`);
  });

  // Handle sending message
  socket.on("sendMessage", (messageData) => {
    const { username, roomCode, message } = messageData;
    console.log(`${username} Message to ${roomCode}: ${message}`);
    socket
      .to(roomCode)
      .emit("receiveMessage", `<b>${username}</b>: ${message}`);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log(`Disconnected: ${socket.id}`);
  });
});

// Start Server
const PORT = 8080;
httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
