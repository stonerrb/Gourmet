import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { orange } from "@mui/material/colors";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  palette: {
    anger: createColor("#F40B27"),
    apple: createColor("#5DBA40"),
    steelBlue: createColor("#5C76B7"),
    violet: createColor("#BC00A3"),
  },
  root: {
    maxWidth: 345,
    margin: "1rem",
  },
  media: {
    height: 200,
  },
  button: {
    margin: "0.5rem",
  },
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

const FoodCard = ({ foodItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  const handleAddToWishlist = () => {
    setWishlist(!wishlist);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card item xs={12} md={8} lg={8} xl={8}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={foodItems.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {foodItems.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {foodItems.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="outlined"
              sx={{ borderRadius: 28, m: 0.5 }}
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <Typography>{quantity}</Typography>
            <Button
              variant="outlined"
              sx={{ borderRadius: 28, m: 0.5 }}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="add to favorites"
              onClick={handleAddToWishlist}
            >
              <FavoriteIcon color={wishlist ? "secondary" : "action"} />
            </IconButton>
            <IconButton aria-label="add to cart">
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      </Card>
    </ThemeProvider>
  );
};

export default FoodCard;
