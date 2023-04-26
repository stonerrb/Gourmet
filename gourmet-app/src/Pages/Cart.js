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

  const [dishes, setDishes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [dishType, setDishType] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/cart/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            profile_id: Cookies.get("userid"),
          }),
        });
        const data = await response.json();
        setDishes(data.food_items);
      } catch (e) {
        console.error(e);
      }
    }
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
          {dishes.length > 0 ? (
            dishes.map((item, index) => (
              <MenuItem disableRipple>
                <CartFoodCard key={index} foodItems={item} />
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
