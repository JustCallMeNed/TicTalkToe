import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Home.css";
import T3 from "../../assets/T3.jpg";
const Home = () => {
  useEffect(() => {
    gsap.timeline(
      gsap.fromTo(
        "#header",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, ease: "back" }
      ),
      gsap.fromTo(
        "#statement",
        { y: 100, opacity: 0 },
        { delay: 0.2, y: 0, opacity: 1, ease: "back" }
      ),
      gsap.fromTo(
        "#homeImg",
        { scale: 0.5, opacity: 0 },
        { delay: 0.5, scale: 1, opacity: 1, ease: "slow" }
      )
    );
  }, []);
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
