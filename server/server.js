require("./config/config");

const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;
const {generateMessage} = require('./utils/message');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
io.on('connection', (socket) => {
    console.log('User connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.emit('newMessage',generateMessage('Admin','Welcome to chat app'));

    socket.broadcast.emit('newMessage',generateMessage('Admin','User joined'));
    
    socket.on('newMessage',(message,callback)=>{
        console.log("New Message Created", message);
        io.emit('newMessage',generateMessage(message.from,message.text));
        callback('This is from server');
    });


});
app.use(express.static(publicPath));
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});