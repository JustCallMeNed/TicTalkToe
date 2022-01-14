import React from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function Chat() {
  return <div className="Chat"></div>;
}

export default Chat;
