import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

const Profile = ({ logUser }) => {
  return (
    <Box>
      {logUser === null ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
        </Box>
      ) : (
        <Box>
          <Typography>
            Hello <b>{logUser}</b>
          </Typography>
          <br />
          <Grid container spacing={2} columns={1} direction="column">
            <Grid item>
              <Typography>Change Password:</Typography>
            </Grid>
            <Grid item>
              <TextField
                type="password"
                onChange={(e) => {
                  // setPassword(e.target.value);
                }}
                id="currentPass"
                label="Current Password"
                variant="outlined"
                autoComplete="off"
                name="pass"
                required
                minLength="8"
                maxLength="20"
                size="20"
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                type="newPassword"
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
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                id="changepass"
                onClick={() => {
                  alert("Naw, you're good " + logUser);
                }}
              >
                Change Password
              </Button>
            </Grid>
          </Grid>
          <br />
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
        </Box>
      )}
    </Box>
  );
};

export default Profile;
