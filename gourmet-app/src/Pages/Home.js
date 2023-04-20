import React from "react";
import DragImage from "../Components/DragImage";
import "./CSS/Home.css";
import AnimatedTextWord from "../Components/AnimatedText";
import AnimatedTitle from "../Components/AnimatedTitle";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/*eslint-disable*/
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#f50000",
    },
    text: {
      secondary: "#757575",
    },
  },
});
/*eslint-enable*/

const Home = () => {
  return (
    <div style={{ overflow: "auto", height: "inherit", display: "block" }}>
      <h1 className="home-title">
        <AnimatedTitle />
      </h1>
      <Link>
        <div className="gotomenu">
          <ThemeProvider theme={theme}>
            <Button
              sx={{ borderRadius: 10 }}
              color={"secondary"}
              variant="contained"
              startIcon={<RestaurantIcon />}
            >
              Order Now
            </Button>
          </ThemeProvider>
        </div>
      </Link>
      <div id="homeBanner" className="homeBanner">
        <img
          className="home-image"
          src="https://i.imgur.com/j1qEIdQ.png"
          draggable="false"
          alt="Gourmet <3"
        ></img>
        <AnimatedTextWord
          key={1}
          text="Experience the 
          CONVENIENCE 
          of gourmet meals        
          on-the-go with 
          GOURMET TAKEAWAY"
          className="quote"
        />
      </div>
      <DragImage />
    </div>
  );
};

export default Home;
