import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Chat from "../Chat/Chat";

export default function ChatWindow() {
  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Chat with (userName)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Chat content: Bitch I'm getting there hold on</Typography>
          <Chat></Chat>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
