







const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', (socket) => {
    socket.on('sendName', (name) =>  socket.emit('greeting', `Hello ${name}`));

    
});

server.listen(3000,()=> console.log(`Server is running on http://localhost:3000`));

// console.log(__dirname); 



console.log(__filename);
console.log(__dirname);











// socket.on('sendName', (name) => socket.emit('greeting', `Hello ${name.trim()}`));