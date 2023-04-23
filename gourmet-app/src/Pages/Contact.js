import React from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Components/Theme";
import Navbar from "../Components/Navbar";
function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data here
  };

  return (
    <div>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Grid
          sx={{
            marginTop: "10rem",
          }}
          container
          justifyContent="center"
        >
          <Grid item xs={12} md={8}>
            <Typography variant="h4" align="left" gutterBottom>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ marginBottom: "1rem" }}
                label="Name"
                fullWidth
                required
              />
              <TextField
                sx={{ marginBottom: "1rem" }}
                label="Email"
                type="email"
                fullWidth
                required
              />
              <TextField
                sx={{ marginBottom: "1rem" }}
                label="Message"
                multiline
                rows={4}
                fullWidth
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Contact;
