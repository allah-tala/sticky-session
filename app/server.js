const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

io.on('connection', socket => {
  console.log(`Client connected to worker on port ${PORT}`);

  socket.emit('hello', `You are connected to port ${PORT}`);

  socket.on('message', msg => {
    console.log(`Received message: ${msg}`);
    socket.send(`Echo from port ${PORT}: ${msg}`);
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected from port ${PORT}`);
  });
});

server.listen(PORT, () => {
  console.log(`Socket.io server running on port ${PORT}`);
});
