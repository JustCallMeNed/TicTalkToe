import { Button, Grid, TextField, Typography, Box } from "@mui/material";
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
    <Box className="Chat">
      {!showChat ? (
        <Box className="joinChatContainer">
          <Typography variant="h6">Username and Room#</Typography>
          <Grid container spacing={1} alignItems="center">
            <Grid item s>
              <TextField
                type="text"
                label="Name"
                autoComplete="off"
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
                autoComplete="off"
                variant="outlined"
                onChange={(e) => {
                  setRoom(e.target.value);
                }}
                onKeyPress={(e) => {
                  e.key === "Enter" && joinRoom();
                }}
              />
            </Grid>
            <Grid item s>
              <Button size="large" onClick={joinRoom} variant="contained">
                Join a Room
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Chatter socket={socket} username={username} room={room} />
      )}
    </Box>
  );
}

export default Chat;
