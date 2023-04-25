import React from "react";
import DragImage from "../Components/DragImage";
import "./CSS/Home.css";
import AnimatedTextWord from "../Components/AnimatedText";
import AnimatedTitle from "../Components/AnimatedTitle";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import {
  Button,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardScatter from "../Components/CardScatter";
import { theme } from "../Components/Theme";
import FooterComp from "../Components/FooterComp";

const actions = [
  { icon: <ShoppingCartIcon />, name: "Cart", path: "/cart" },
  { icon: <RestaurantIcon />, name: "Menu", path: "/menu" },
  { icon: <Avatar />, name: "Profile", path: "/profile" },
];

const Home = () => {
  return (
    <div style={{ overflow: "auto", height: "inherit", display: "block" }}>
      <ThemeProvider theme={theme}>
        <SpeedDial
          color="secondary"
          ariaLabel="SpeedDial openIcon example"
          sx={{
            position: "fixed",
            bottom: 40,
            right: 30,
          }}
          icon={<SpeedDialIcon openIcon={<MenuIcon />} />}
          FabProps={{
            size: "large",
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={() => (window.location.href = action.path)}
              FabProps={{}}
            />
          ))}
        </SpeedDial>
      </ThemeProvider>
      <h1 className="home-title">
        <AnimatedTitle />
      </h1>
      <Link>
        <div className="gotomenu">
          <ThemeProvider theme={theme}>
            <Link to="/menu">
              <Button
                sx={{ borderRadius: 10 }}
                variant="contained"
                startIcon={<RestaurantIcon />}
              >
                Order Now
              </Button>
            </Link>
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
      <div className="home-text">
        <h1 className="home-text-title">About Us</h1>
        <p className="home-text-content">
          Gourmet Takeaway is a food delivery service that provides a wide
          variety of gourmet meals to customers. We are a team of passionate
          foodies who are dedicated to providing the best food experience to our
          customers. We are committed to providing the best quality food and
          service to our customers.
        </p>
        <br />
        <p className="home-text-content-2">
          So visit our menu and order your favourite meal today!
        </p>
      </div>
      <div className="scatter-cards">
        <CardScatter />
      </div>
      <FooterComp margin="2100px" />
    </div>
  );
};

export default Home;
