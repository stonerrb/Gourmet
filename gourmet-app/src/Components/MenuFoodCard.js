import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Backdrop,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import FoodCard from "./FoodCard";
import { theme } from "./Theme";

const MenuFoodCard = ({ foodItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [CardOpen, setCardOpen] = useState(false);

  const handleAddToWishlist = () => {
    setWishlist(!wishlist);
  };

  const handleCardOpen = () => {
    setCardOpen(!CardOpen);
  };

  const handleCardClose= (event) => {
    if (event.target === event.currentTarget) {
      setCardOpen(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{ position:'relative',display: "flex", height: "220px" }}
        onClick={handleCardOpen}
        style={{ cursor: "pointer" }}
      >
        <Box sx={{ width: "150%", display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5"  sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}>
              {foodItems.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                marginTop: "10px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {foodItems.description}
            </Typography>
            <Typography
              variant="subtitle1"
              color="secondary"
              component="div"
              sx={{
                position: "absolute",
                bottom: "20px",
              }}
              style={{ fontSize: "1.3rem" }}
            >
              Rs.{foodItems.price} /-
            </Typography>
          </CardContent>
        </Box>
        <CardMedia component="img" image={foodItems.image} />
      </Card>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={CardOpen}
        onClick={handleCardClose}
      >
          <FoodCard foodItems={foodItems} />
      </Backdrop>
    </ThemeProvider>
  );
};

export default MenuFoodCard;
