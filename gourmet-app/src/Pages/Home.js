import React from "react";
import DragImage from "../Components/DragImage";
import "./CSS/Home.css";
import AnimatedTextWord from "../Components/AnimatedText";
import AnimatedTitle from "../Components/AnimatedTitle";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Button,SpeedDial,SpeedDialAction,SpeedDialIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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

const actions = [
  { icon: <ShoppingCartIcon />, name: 'Cart'},
  { icon: <RestaurantIcon />, name: 'Menu' },
  { icon: <Avatar />, name: 'Profile' },
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
          icon={
            <SpeedDialIcon openIcon={<MenuIcon/>} />
          }
          FabProps={{
            size: "large",
            style: { backgroundColor: theme.palette.secondary.main },
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              FabProps={{
                style: { color: theme.palette.secondary.main },
              }}
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
                color={"secondary"}
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
    </div>
  );
};

export default Home;
