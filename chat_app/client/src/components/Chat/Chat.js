import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import queryString from "query-string";
import io from "socket.io-client";

// import TextContainer from "../TextContainer/TextContainer";
// import Messages from "../Messages/Messages";
// import InfoBar from "../InfoBar/InfoBar";
// import Input from "../Input/Input";

import "./Chat.css";
// https://project-chat-application.herokuapp.com/
const ENDPOINT = "localhost:5000";

let socket;

const Chat = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
  //   // const [users, setUsers] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
  const location = useLocation();
  console.log(location);
    useEffect(() => {
      const { name, room } = queryString.parse(location.search);

      socket = io(ENDPOINT);

      setRoom(room);
      setName(name);

      socket.emit("join", { name, room }, (error) => {
        if (error) {
          alert(error);
        }
      });
      return ()=>{
        socket.emit('disconnect');
        socket.off();
      }
    }, [ENDPOINT, location.search]);

    useEffect(()=>{
      socket.on("message",(message)=>{
        setMessages([...messages,message]);
      })
    },[messages]);



  return (
    <div className="outerContainer">
      <div className="container">
        <input
        value={message}
        onChange={(event)=>setMessage(event.target.value)}
        onKeyPress={event=>event.key=='Enter'?setMessage()}
        </div>
    </div>
  );
  // useEffect(() => {
  //   socket.on("message", (message) => {
  //     setMessages((messages) => [...messages, message]);
  //   });

  //   socket.on("roomData", ({ users }) => {
  //     setUsers(users);
  //   });
  // }, []);

  // const sendMessage = (event) => {
  //   event.preventDefault();

  //   if (message) {
  //     socket.emit("sendMessage", message, () => setMessage(""));
  //   }
  // };

  // return (
  //   <div className="outerContainer">
  //     <div className="container">
  //       <InfoBar room={room} />
  //       <Messages messages={messages} name={name} />
  //       <Input
  //         message={message}
  //         setMessage={setMessage}
  //         sendMessage={sendMessage}
  //       />
  //     </div>
  //     <TextContainer users={users} />
  //   </div>
  // );
};

export default Chat;
