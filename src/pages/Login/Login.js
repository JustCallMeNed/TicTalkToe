import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "1000",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Login = ({ setLogUser }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "../profile";
    navigate(path);
  };

  return (
    <Box className="loginPage">
      <Typography variant="h4" component="h4">
        Log In/Sign Up Here
      </Typography>
      <br />
      {/* Username field VVV */}
      <form>
        <Grid container spacing={2} columns={1} direction="column">
          <Grid item className="username">
            <TextField
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              id="name"
              label="Username"
              variant="outlined"
              autoComplete="off"
              name="name"
              required
              minLength="4"
              maxLength="20"
              size="20"
            ></TextField>
          </Grid>
          {/* Password field VVV */}
          <Grid item className="password">
            <TextField
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="pass"
              label="Password"
              variant="outlined"
              autoComplete="off"
              name="pass"
              required
              minLength="8"
              maxLength="20"
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
              onClick={async () => {
                const loggedInUser = await axios.get(
                  "http://localhost:3001/user/findAll",
                  {
                    userName,
                  }
                );
                console.log(userName);

                // Need to write conditional statement "If userName and password in field match Then setLogUser"
                setLogUser(loggedInUser.data.username);
                routeChange();
                console.log(loggedInUser);
                console.log(setLogUser);
              }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item>
            {/* Clear All Fields button VVV */}
            <Button variant="contained" id="clearLogin" type="reset">
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* SignUp */}
      <Box>
        <Button onClick={handleOpen}>New User? Click Here!</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Enter New Username and Password
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              component={"div"}
            >
              <form>
                <Grid container spacing={2} columns={1} direction="column">
                  <Grid item className="username">
                    <TextField
                      type="text"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                      id="name"
                      label="Username"
                      variant="outlined"
                      autoComplete="off"
                      name="name"
                      required
                      minLength="4"
                      maxLength="20"
                      size="20"
                    ></TextField>
                  </Grid>
                  <Grid item className="password">
                    <TextField
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      id="pass"
                      label="Password"
                      variant="outlined"
                      autoComplete="off"
                      name="pass"
                      required
                      minLength="8"
                      maxLength="20"
                      size="20"
                    ></TextField>
                  </Grid>
                  <br />
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ sm: 2 }}>
                  <Grid item>
                    <Button
                      variant="contained"
                      id="signUpSubmit"
                      onClick={() => {
                        console.log(userName, password);
                        axios.post("http://localhost:3001/user/create", {
                          userName,
                          password,
                        });
                        setOpen(false);
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" id="clearSignUp" type="reset">
                      Clear
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Typography>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Login;
