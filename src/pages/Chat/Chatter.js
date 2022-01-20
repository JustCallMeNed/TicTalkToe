import { Typography, Box, Container, Grid, Chip, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useRef, useState, useEffect } from "react";
import "./Chatter.css";

function Chatter({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  let SubmitMessage = () => {
    sendMessage();
    setCurrentMessage("");
  };

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  return (
    <Box className="chat-window">
      <Container>
        <Typography variant="h6">Room# {room}</Typography>

        <Container className="message-container">
          {messageList.map((messageContent, i) => {
            return (
              <Box
                className="message"
                id={username === messageContent.author ? "you" : "other"}
                key={i}
              >
                <Grid container spacing={1}>
                  <Grid item>
                    <Typography className="author" variant="">
                      {messageContent.author}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{messageContent.time}</Typography>
                  </Grid>
                </Grid>
                <Container>
                  <Chip
                    className="message-content"
                    label={messageContent.message}
                    color="primary"
                    ref={divRef}
                  />
                </Container>
                <br />
              </Box>
            );
          })}
        </Container>
      </Container>

      <br />
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <TextField
            inputProps={{ maxLength: 120 }}
            hiddenLabel
            type="text"
            autoComplete="off"
            value={currentMessage}
            placeholder="Aa"
            variant="filled"
            size="small"
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            onKeyPress={(e) => {
              e.key === "Enter" && sendMessage();
            }}
          />
        </Grid>
        <Grid item>
          <Button size="large" variant="contained" onClick={() => SubmitMessage()}>
            <SendIcon />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Chatter;
