import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import {
  Badge,
  IconButton,
  Menu,
  MenuItem,
  ThemeProvider,
} from "@mui/material";
import Cart from "../Pages/Cart";
import { theme } from "./Theme";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const profilePaperProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};
const cartPaperProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 15,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
    width: "400px",
  },
};

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [anchorE2, setAnchorE2] = useState(null);
  const open2 = Boolean(anchorE2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    const token = Cookies.get("token");
    const res = await fetch("/profile/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    });

    const data = await res.json();

    if (res.status === 404 || !data) {
      window.alert("Not able to Logout, Please try again");
      console.log("Logout err");
    } else if (res.status === 500 || !data) {
      window.alert("Not able to Logout, Please try again");
      console.log("Logout err");
    } else if (data) {
      localStorage.removeItem("username");
      Cookies.remove("token");
      console.log("User Logged Out");
      navigate("/");
    }
  };

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("/menu/get")
      .then((res) => res.json())
      .then((data) => {
        const dish = data.food_item;
        setDishes(dish);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="navbar">
      <nav>
        <p>Gourmet.</p>
        <ThemeProvider theme={theme}>
          <div className="nav-links">
            <Link to="/" className="menu-buttons">
              Home
            </Link>
            <Link to="/menu" className="menu-buttons">
              Menu
            </Link>
            <Link to="/contact" className="menu-buttons">
              Contact
            </Link>
          </div>
          <div className="nav-items">
            <IconButton
              aria-label="show cart items"
              color="inherit"
              onClick={handleClick2}
            >
              <Badge badgeContent={dishes.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Menu
              id="cart-menu"
              anchorEl={anchorE2}
              open={Boolean(anchorE2)}
              onClose={handleClose2}
              PaperProps={cartPaperProps}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              getContentAnchorEl={null}
            >
              <Cart />
            </Menu>
            <Tooltip title="Account settings">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32 }}></Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={profilePaperProps}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Link to="/profile" id="profile-link" >
              <MenuItem onClick={handleClose}>
                <Avatar /> Name
              </MenuItem>
              </Link>
              <Divider />
              <MenuItem onClick={handleClose}>
                <Link to="/wishlist" className="menu-links" id="wishlist-icon">
                  <ListItemIcon>
                    <i className="fa-solid fa-heart"></i>
                  </ListItemIcon>
                  Wishlist
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </ThemeProvider>
      </nav>
    </div>
  );
}

export default Navbar;
