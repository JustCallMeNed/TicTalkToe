import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import SimpleAccordion from "./MUI/Accordion";
import BasicTable from "./MUI/BasicTable";
import TemporaryDrawer from "./MUI/Drawer";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const Home = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <p>Welcome to Tic Talk Toe!</p>
      <div>
        <h1>The following are MUI examples</h1>
        <Button variant="contained">Hello There</Button>
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
        <TemporaryDrawer />
        <SimpleAccordion />

        <Stack direction="row" spacing={2}>
          <Avatar alt="Dustin" src="./MUI/assets/Dustin.jpg" />
          <Avatar alt="Neal" src="./MUI/assets/Neal.jpg" />
          <Avatar alt="Tim" src="./MUI/assets/Tim.jpg" />
        </Stack>
        <BasicTable />
        <Box sx={{ minWidth: 120 }}>
          <FormControl id="topRow">
            <Select
              value={age}
              label="Age"
              onChange={handleChange}
              class="cords"
              id="cord1"
            >
              <MenuItem value="_">_</MenuItem>
              <MenuItem value="X">X</MenuItem>
              <MenuItem value="O">O</MenuItem>
            </Select>
            <Select class="cords" id="cord2">
              <MenuItem>_</MenuItem>
              <MenuItem>X</MenuItem>
              <MenuItem>O</MenuItem>
            </Select>
            <Select class="cords" id="location3">
              <MenuItem>_</MenuItem>
              <MenuItem>X</MenuItem>
              <MenuItem>O</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
};

export default Home;
