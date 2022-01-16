import React from "react";
import T3 from "../../assets/T3.jpg";
// import ChatWindow from "../MUI/ChatWindow";
const Home = () => {
  return (
    <div>
      <intro id="header">
        <h1>Welcome to Tic Talk Toe!</h1>
        <h3>A multiplayer gaming and chat platform</h3>
      </intro>
      <div>
        {/* <img src={homeImage} alt="Tic Tac Toe game" /> */}
        <img src={T3} alt="Tic Tac Toe game" />
        <h3>This is an Accordion for the chat</h3>
        {/* <ChatWindow /> */}
      </div>
    </div>
  );
};

export default Home;
