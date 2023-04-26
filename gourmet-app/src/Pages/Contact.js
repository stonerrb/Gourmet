import React, { useState } from "react";
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
  const Feedback = {
    topic: "",
    description: "",
  };

  const [feedback, setFeedback] = useState(Feedback);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = localStorage.getItem("username");
    const { topic, description } = feedback;
    fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic,
        description,
        user_name: username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setFeedback({
            topic: "",
            description: "",
          });
          alert("Feedback Submitted");
        }
      });
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
                  value={feedback.topic}
                  onChange={(event) => {
                    setFeedback({
                      ...feedback,
                      topic: event.target.value,
                    });
                  }}
                />
                <TextField
                  sx={{ marginBottom: "1rem" }}
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  value={feedback.description}
                  onChange={(event) => {
                    setFeedback({
                      ...feedback,
                      description: event.target.value,
                    });
                  }}
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
                  <FacebookRoundedIcon className="social-icon-facebook" />
                </Link>
                <Link to={"https://www.instagram.com/"}>
                  <InstagramIcon
                    className="social-icon-instagram"
                    id="myPath"
                  />
                </Link>
                <Link to={"https://twitter.com/"}>
                  <TwitterIcon className="social-icon-twitter" />
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
