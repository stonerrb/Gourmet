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
            <Card sx={{ display: 'flex'}}>
                <Box sx={{ width:'150%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {foodItems.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                            {foodItems.description}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                            Rs.{foodItems.price} /-
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia component="img" image={foodItems.image} />
            </Card>
        </ThemeProvider>
    );
};

export default FoodCardSmall;
