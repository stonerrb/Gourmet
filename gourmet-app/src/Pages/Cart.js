import React, { useState, useEffect } from "react";
import {
  Button,
  MenuItem,
  MenuList,
  ThemeProvider,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CartFoodCard from "../Components/CartFoodCard";
import { theme } from "../Components/Theme";
import Cookies from "js-cookie";

const Cart = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [cartItems, setcartItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let profile_id = Cookies.get("userid");
        const response = await fetch(`/cart/get?profile_id=${profile_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const cart = await response.json();
        const cartItemData = await Promise.all(
          cart.food_items.map(async (item) => {
            const itemResponse = await fetch(`/menu/get/cart/${item.food_item}`, {
              method: "GET", 
              headers: {
                "Content-Type": "application/json",
              },
            });
            const ItemData = await itemResponse.json();
            return {
              ...ItemData,
              quantity: item.quantity,
            };
          })
        );
        setcartItems(cartItemData);
        
      } catch (e) {
        console.error(e);
      }
    };
    
    
    fetchData();
  }, []);


  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <MenuList
          disableRipple
          onClick={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "10px",
            paddingLeft: "20px",
          }}  
        >
          Cart
        </MenuList>
        <Divider />
        <Box
          sx={{
            height: "400px",
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
          }}
        >
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <MenuItem disableRipple>
                <CartFoodCard key={item.id} number={29} foodItems={item} />
              </MenuItem>
            ))
          ) : (
            <div>No items in cart</div>
          )}
        </Box>
        <Divider />
        <MenuList
          disableRipple
          onClick={handleClose}
          sx={{ height: "30px", paddingLeft: "20px" }}
        >
          <Button variant="outlined">Checkout</Button>
        </MenuList>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Cart;
