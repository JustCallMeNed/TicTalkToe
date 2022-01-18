import { Button, Grid, TextField, Typography } from "@mui/material";
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
          <br />
          <Typography variant="h6">Let's Chat</Typography>
          <Grid container spacing={1} alignItems="center">
            <Grid item s>
              <TextField
                type="text"
                label="Name"
                variant="outlined"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Grid>
            <Grid item s>
              <TextField
                type="text"
                label="Room ID"
                variant="outlined"
                onChange={(e) => {
                  setRoom(e.target.value);
                }}
              />
            </Grid>
            <Grid item s>
              <Button size="large" onClick={joinRoom} variant="contained">
                Join a Room
              </Button>
            </Grid>
          </Grid>
        </div>
      ) : (
        <Chatter socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Chat;
