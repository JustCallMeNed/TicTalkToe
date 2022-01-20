import { Typography, Box, Container, Grid, Chip, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState, useEffect } from "react";
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

  // This might be helpful for scroll function
  // const AlwaysScrollToBottom = () => {
  //   const elementRef = useRef();
  //   useEffect(() => elementRef.current.scrollIntoView());
  //   return <div ref={elementRef} />;
  // };

  return (
    // Ben: Trying to set up a scroll bar for when chat window becomes too high
    <Box className="chat-window">
      <Container>
        <Typography variant="h6">Room# {room}</Typography>
        <Container className="message-container">
          {messageList.map((messageContent) => {
            return (
              <Box id={username === messageContent.author ? "you" : "other"}>
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
                  <Chip label={messageContent.message} color="primary" />
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
            inputProps={{ maxLength: 160 }}
            hiddenLabel
            type="text"
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
