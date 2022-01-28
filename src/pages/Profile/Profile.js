import { Button, Card, CardContent, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

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
          <Typography>Have you considered ending it all?</Typography>
          <Button
            variant="contained"
            id="seppuku"
            onClick={() => {
              alert("Can't let you do that " + logUser);
            }}
          >
            Delete Profile
          </Button>
        </Container>
      )}
    </Box>
  );
};

export default Profile;
