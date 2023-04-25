import {
  Button,
  ButtonGroup,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Card, CardMedia, CardContent, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./CartFoodCard.css";
import { theme } from "./Theme";

const CartFoodCard = ({ foodItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(0);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    setAmount(foodItems.price * quantity);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    handleAmount();
  };
  const handleAmount = () => {
    setAmount(quantity * foodItems.price);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card
        elevation={0}
        sx={{display: "flex", height: "90px", width: "100vh", margin: "0" }}
      >
        <CardMedia
          sx={{ width: "35%" }}
          component="img"
          image={foodItems.image}
        />
        <CardContent
          sx={{padding:0,height: "100%",width:'60%', display: "flex", flexDirection: "column" }}
        >
          <Typography
            variant=""
            component="div"
            sx={{
              paddingLeft: "10px",
              paddingTop: "10px",
              height: "35px",
              width: "80%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
            }}
          >
            {foodItems.name}
          </Typography>
          <div className="bottom-cart">
            <div className="button-group-cart">
            <button
                onClick={handleDecreaseQuantity}
                className="quantity-buttons-cart"
              >
                {quantity === 1 ? (
                  <DeleteIcon sx={{ height: "15px", width: "15px" }} />
                ) : (
                  <RemoveIcon sx={{ height: "15px", width: "15px" }} />
                )}
              </button>
           
              <div className="quantity">
                <span>{quantity}</span>
              </div>
              
              <button
                onClick={handleIncreaseQuantity}
                className="quantity-buttons-cart"
              >
                <AddIcon sx={{ height: "15px", width: "15px" }} />
              </button>
          
            </div>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                width: "30%",
              }}
            >
              Rs. {amount} /-
            </Typography>
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default CartFoodCard;
