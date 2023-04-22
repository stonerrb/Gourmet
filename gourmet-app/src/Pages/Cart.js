import React,{useState,useEffect} from "react";
import { Badge, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
    fetch("/menu/get")
      .then((res) => res.json())
      .then((data) => {
        const dish = data.food_item; 
        setDishes(dish);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDishType = async (dishType) => {
    if (dishType === selectedCategory) {
      setSelectedCategory("");
      setDishType("");
    } else {
      setSelectedCategory(dishType);
      setDishType(dishType);
    }
  };
  return (
    <React.Fragment>
      <IconButton
        aria-label="show cart items"
        color="inherit"
        onClick={handleClick}
      >
        <Badge badgeContent={dishes.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Menu
        id="cart-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dishes.length > 0 ? (
          dishes.map((item, index) => (
            <MenuItem key={index}>
              <Typography variant="subtitle1">{item.name}</Typography>
              <Typography variant="subtitle2">
                {item.quantity} x {item.price}
              </Typography>
            </MenuItem>
          ))
        ) : (
          <MenuItem>No items in cart</MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
};

export default Cart;
