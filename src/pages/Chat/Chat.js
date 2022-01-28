import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import io from "socket.io-client";
import Chatter from "./Chatter";

const socket = io.connect("http://localhost:3001");

function Chat({ logUser }) {
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <Box className="Chat">
      {!showChat ? (
        <Box className="joinChatContainer">
          <Typography variant="h6">
            Hello <b>{logUser}</b>! Please enter Room#
          </Typography>
          <Grid container spacing={1} alignItems="center">
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
        <Chatter socket={socket} username={logUser} room={room} />
      )}
    </Box>
  );
}

export default Chat;
