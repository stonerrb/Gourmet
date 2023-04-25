import React from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Components/Theme";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "./CSS/Contact.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

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
            <div className="container-contact">
              <Typography
                variant="h5"
                align="left"
                gutterBottom
                color="primary"
                style={{ marginTop: "2rem", fontSize: "2rem" }}
              >
                Gourmet.
                <div style={{ color: "rgb(228, 129, 14)", fontSize: "1.5rem" }}>
                  Raj Labadhi Heritage,
                  <br />
                  Koba,
                  <br />
                  Gandhi Nagar,
                  <br />
                  Gujarat - 382426
                  <br />
                  <Link
                    to={"https://goo.gl/maps/Du42gHU3UgsPbzC88"}
                    target="_blank"
                    className="map-link"
                  >
                    Get Directions {">>"}
                  </Link>
                </div>
              </Typography>
            </div>
            <div className="container-contact">
              <Typography
                variant="h5"
                align="left"
                gutterBottom
                color="primary"
                style={{ marginTop: "2rem" }}
              >
                Feedback
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{ marginBottom: "1rem" }}
                  label="Subject"
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
                <br />
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </form>
            </div>
            <div className="container-contact">
              <Typography
                variant="h5"
                align="left"
                gutterBottom
                color="primary"
                style={{ marginTop: "2rem" }}
              >
                Email:
                <br />
                <div className="links-contact">
                  <Link
                    to={"mailto:support@gourmet.com"}
                    className="links-contact-content"
                  >
                    support@gourmet.com
                  </Link>
                </div>
              </Typography>
            </div>
            <div className="container-contact">
              <Typography
                variant="h5"
                align="left"
                gutterBottom
                color="primary"
                style={{ marginTop: "2rem" }}
              >
                Phone:
                <br />
                <div className="links-contact">
                  <Link
                    to={"tel:+1-866-881-9615"}
                    className="links-contact-content"
                  >
                    +91-866-819-615
                  </Link>
                </div>
              </Typography>
            </div>
            <div className="container-contact">
              <Typography
                variant="h5"
                align="left"
                gutterBottom
                color="primary"
                style={{ marginTop: "2rem" }}
              >
                Social:
              </Typography>
              <div className="social-icons">
                <Link to={"https://www.facebook.com/"}>
                  <FacebookRoundedIcon className="social-icon" />
                </Link>
                <Link to={"https://www.instagram.com/"}>
                  <InstagramIcon className="social-icon" />
                </Link>
                <Link to={"https://twitter.com/"}>
                  <TwitterIcon className="social-icon" />
                </Link>
              </div>
            </div>
            <div className="last-contact">
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                color="white"
                style={{
                  marginTop: "2rem",
                  fontFamily: "Courier New",
                }}
              >
                "Crave it. Click it. Gourmet it."
              </Typography>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Contact;
