import React, { useState } from "react";
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Button,
    Rating,
    Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

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

const FoodCardSmall = ({ foodItems }) => {
    const [quantity, setQuantity] = useState(1);
    const [wishlist, setWishlist] = useState(false);

    const handleAddToWishlist = () => {
        setWishlist(!wishlist);
    };

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {foodItems.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                            {foodItems.description}
                        </Typography>

                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </IconButton>
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
                    </Box>
                </Box>
                <CardMedia component="img" image={foodItems.image} />
            </Card>
        </ThemeProvider>
    );
};

export default FoodCardSmall;
