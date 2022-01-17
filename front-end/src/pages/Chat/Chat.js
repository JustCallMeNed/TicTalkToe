import { Button } from "@mui/material";
import React, { useState } from "react";
import io from "socket.io-client";
import Chatter from "./Chatter";

const socket = io.connect("http://localhost:3001");

function Chat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="Chat">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Let's Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <Button onClick={joinRoom} variant="contained">
            Join a Room
          </Button>
        </div>
      ) : (
        <Chatter socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Chat;
