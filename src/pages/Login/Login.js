import "./Login.css";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box className="loginPage">
      <Typography variant="h4" component="h4">
        Log In/Sign Up Here
      </Typography>
      <br />
      {/* Username field VVV */}
      <form>
        <Grid container spacing={2} columns={1} direction="column">
          <Grid item spacing={1} className="username">
            <TextField
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              id="name"
              label="Username"
              variant="outlined"
              name="name"
              required
              minlength="4"
              maxlength="20"
              size="20"
            ></TextField>
          </Grid>
          {/* Password field VVV */}
          <Grid item spacing={1} className="password">
            <TextField
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="pass"
              label="Password"
              variant="outlined"
              name="pass"
              required
              minlength="8"
              maxlength="20"
              size="20"
            ></TextField>
          </Grid>
          <br />
        </Grid>
        {/* Submit Form button VVV */}
        <Grid container rowSpacing={1} columnSpacing={{ sm: 2 }}>
          <Grid item>
            <Button
              variant="contained"
              id="loginSubmit"
              onClick={() => {
                console.log(userName, password);
                axios.post("http://localhost:3001/user/create", {
                  userName,
                  password,
                });
              }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item>
            {/* Clear All Fields button VVV */}
            <Button
              variant="contained"
              id="loginSubmit"
              type="reset"
              // onClick={() => {
              //   alert("hello there");
              // }}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Login;
