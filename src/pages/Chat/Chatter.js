import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

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
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
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

  // Ben: I need to finish MUI on this tonight
  return (
    <div className="chat-window">
      <Typography variant="h6">Live Chat</Typography>
      <div className="message-container">
        {messageList.map((messageContent) => {
          return (
            <div id={username === messageContent.author ? "you" : "other"}>
              <div>
                <div>
                  <p>{messageContent.message}</p>
                </div>
                <div>
                  <p>{messageContent.time}</p>
                  <p>{messageContent.author}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          value={currentMessage}
          placeholder="How you dooin?..."
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={() => SubmitMessage()}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chatter;
