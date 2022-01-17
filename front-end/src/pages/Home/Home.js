import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
import T3 from "../../assets/T3.jpg";
const Home = () => {
  return (
    <Box>
      <Container id="header">
        <Typography id="title" className="t3Style" variant="h1">
          Tic Talk Toe!
        </Typography>
        <Typography id="statement" className="t3Style" variant="h3">
          A multiplayer gaming and chat platform
        </Typography>
      </Container>
      <Container id="homeImg">
        <img id="T3" src={T3} alt="Tic Tac Toe game" />
      </Container>
    </Box>
  );
};

export default Home;
