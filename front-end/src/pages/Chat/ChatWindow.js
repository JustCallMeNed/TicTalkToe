import * as React from "react";
import "./ChatWindow.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chat from "./Chat";

export default function ChatWindow({ chatVisible }) {
  return (
    <div id="chatWindow" style={{ opacity: chatVisible ? 1 : 0 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Chat with (userName)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Chat content: Don't you love it when stuff just works out the first time you
            add it?
          </Typography>
          <Chat></Chat>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
