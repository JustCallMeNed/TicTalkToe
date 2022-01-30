import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

const Profile = ({ logUser }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {logUser === null ? (
        <Card
          variant="outlined"
          sx={{ display: "flex", alignItems: "center", width: "500px" }}
        >
          <CardContent sx={{ display: "flex", textAlign: "center" }}>
            <Typography variant="h3">
              Please Login to enjoy Tic Talk Toe to the fullest
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Container>
          <Typography>
            Hello <b>{logUser}</b>
          </Typography>
          <br />
          <Typography>Change Password:</Typography>
          <TextField
            type="password"
            onChange={(e) => {
              // setPassword(e.target.value);
            }}
            id="pass"
            label="Current Password"
            variant="outlined"
            autoComplete="off"
            name="pass"
            required
            minLength="8"
            maxLength="20"
            size="20"
          ></TextField>
          <TextField
            type="password"
            onChange={(e) => {
              // setPassword(e.target.value);
            }}
            id="pass"
            label="Enter New Password"
            variant="outlined"
            autoComplete="off"
            name="pass"
            required
            minLength="8"
            maxLength="20"
            size="20"
          ></TextField>
          <Button
            variant="contained"
            id="changepass"
            onClick={() => {
              alert("Can't let you do that " + logUser);
            }}
          >
            Change Password
          </Button>
          <Typography>Have you considered ending it all?</Typography>
          <Button
            variant="contained"
            id="seppuku"
            onClick={() => {
              axios.delete("http://localhost:3001/user/delete");
            }}
          >
            {" "}
            Delete Profile
          </Button>
        </Container>
      )}
    </Box>
  );
};

export default Profile;
