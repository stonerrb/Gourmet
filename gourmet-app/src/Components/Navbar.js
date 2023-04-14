import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Router,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "../Pages/Home";
import Menu2 from "../Pages/Menu2";
import Contact from "../Pages/Contact";
import "./Navbar.css";
import Cart from "../Pages/Cart";
import Wishlist from "../Pages/Wishlist";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Tooltip } from "@mui/material";
import Login from "../Pages/Login";

function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <p>Gourmet.</p>
          <div class="nav-links">
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
          <div class="nav-items">
            <Link to="/wishlist" className="menu-links" id="wishlist-icon">
              <i className="fa-solid fa-heart"></i>
            </Link>
            <Link to="/cart" className="menu-links" id="cart-icon">
              <Tooltip title="Cart">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </Tooltip>
            </Link>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/menu" element={<Menu2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
