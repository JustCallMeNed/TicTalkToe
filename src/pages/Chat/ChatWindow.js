import * as React from "react";
import "./ChatWindow.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chat from "./Chat";

export default function ChatWindow({ logUser, chatVisible }) {
  return (
    <Box id="chatWindow" style={{ bottom: chatVisible ? "5px" : "-1000px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">Let's Chat</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {logUser === null ? (
            <Typography variant="h6">Please Log in to chat</Typography>
          ) : (
            <Chat logUser={logUser} />
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
