import * as React from "react";
import "./ChatWindow.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chat from "./Chat";

export default function ChatWindow({ chatVisible }) {
  return (
    // Need to fix the style here so div isn't clickable
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
          <Chat />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
