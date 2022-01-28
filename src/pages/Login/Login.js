import "./Login.css";
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

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              autoComplete="off"
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
              autoComplete="off"
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
              onClick={async () => {
                console.log(userName, password);
                await axios.get("http://localhost:3001/user/findAll", {
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
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
                      autoComplete="off"
                      name="name"
                      required
                      minlength="4"
                      maxlength="20"
                      size="20"
                    ></TextField>
                  </Grid>
                  <Grid item spacing={1} className="password">
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
                      minlength="8"
                      maxlength="20"
                      size="20"
                    ></TextField>
                  </Grid>
                  <br />
                </Grid>
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
                    <Button variant="contained" id="loginSubmit" type="reset">
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
