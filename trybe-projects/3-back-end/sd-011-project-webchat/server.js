const path = require('path');
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const formatMsg = require('./utils/formatMessage');
const messagesController = require('./controllers/messagesController');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;

const users = {};

io.on('connection', async (socket) => {
  users[socket.id] = socket.id.slice(0, 16);
  console.log(`${users[socket.id]} está online`);
  const messagesHistory = await messagesController.showMsg();

  io.emit('users', users);
  io.emit('messageHistory', messagesHistory);

  socket.on('message', async ({ chatMessage, nickname = users[socket.id] }) => {
    io.emit('message', formatMsg(nickname, chatMessage));
    await messagesController.saveMsg({ message: chatMessage, nickname });
  });

  socket.on('changeNick', (newNick) => {
    users[socket.id] = newNick; io.emit('users', users);
  });

  socket.on('disconnect', () => {
    delete users[socket.id]; io.emit('users', users);
  });
});

app.get('/', (_req, res) => {
  res.sendFile(path.join(`${__dirname}/views/`, 'index.html'));
});

server.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
