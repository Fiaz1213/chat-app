import { Server } from "socket.io";
import http from "http";
import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// Create Socket Server on top of Express Server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [`${process.env.CORS_ORIGIN}`],
    methods: ["GET", "POST"],
  },
});

//Realtime Messaging
export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

//Online User Status
//{userId: socketId}
const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("A user connected : ", socket.id);

  //Getting current logged in user-id from frontend
  const userId = socket.handshake.query.userId;
  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  // io.emit() is used to send events to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() is used to listen to events
  // Can be used on both client & server side
  socket.on("disconnect", () => {
    console.log("User disconnceted : ", socket.id);

    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
