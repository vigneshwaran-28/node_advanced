const express=require('express');
const http=require('http');
const socketio=require('socket.io');
const router=require('./router');
const {addUser,removeUser,getUser,getUserInRoom}=require('./users');

const app=express();
const server=http.createServer(app);
const io=socketio(server);

io.on('connection',(socket)=>{
    console.log("we have connected!");

    socket.on('join',({name,room},callback)=>{
        const {error,user}=addUser({id:socket.id,name,room});
        console.log(name,room);
        if(error) return callback(error);
        socket.emit('message',{user:'admin',text:`${user.name}, welcome to the room ${user.room}`});
       socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name}, has joined!`});
        socket.join(user.room);
        callback();
    });

    socket.on('sendMessage',(message,callback)=>{
        const user=getUser(socket.id);
        io.to(user.room).emit('message',{user:user.name,text:message});
        callback();
    })

    socket.on('disconnect',()=>{
        console.log("user left");
    });
});


app.use(router);


server.listen(5000,()=>console.log('server has started!'));

