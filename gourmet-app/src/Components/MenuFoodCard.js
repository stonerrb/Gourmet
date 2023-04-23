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
    Backdrop
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FoodCard from "./FoodCard";
import { theme } from "./Theme";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const MenuFoodCard = ({ foodItems }) => {
    const [quantity, setQuantity] = useState(1);
    const [wishlist, setWishlist] = useState(false);
    const [CardOpen, setCardOpen] = useState(false);

    const handleAddToWishlist = () => {
        setWishlist(!wishlist);
    };

    const handleCardOpen = (event) => {
        const backdrop = document.getElementById("backdrop");
        if(backdrop && backdrop.contains(event.target)) return;
        setCardOpen(!CardOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ display: 'flex' }} onClick={handleCardOpen}>
                <Box sx={{ width: '150%', display: 'flex', flexDirection: 'column' }}>
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
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={CardOpen}
                onClick={handleCardOpen}
            >   <div id="backdrop">
                <FoodCard foodItems={foodItems}/>
                </div>
            </Backdrop>
        </ThemeProvider>
    );
};

export default MenuFoodCard;
