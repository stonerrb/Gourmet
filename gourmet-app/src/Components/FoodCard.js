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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./FoodCard.css";

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

const FoodCard = ({ foodItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleAddToWishlist = () => {
    setWishlist(!wishlist);
  };
  

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    setAmount(foodItems.price * (quantity));
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
      <Card className="card" >
        <CardActionArea className="card-action" onDoubleClick={handleAddToWishlist}>
          <CardMedia component="img" height='300' image={foodItems.image} sx={{height:'44%'}} />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="h2" sx={{fontWeight:'bold',paddingBottom:'10px'}}>
              {foodItems.name}
            </Typography>
            <Rating name="read-only" value={foodItems.rating} readOnly />
            <Typography gutterBottom variant="h6" component="h2" sx={{paddingTop:'10px' ,width:'90%' ,height:'48%', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              {foodItems.description}
            </Typography>
          </CardContent>
        <div className="bottom-buttons">
        <div className='button-group'>
            <button
              onClick={handleDecreaseQuantity}
              className='quantity-buttons'
            >
              <RemoveIcon sx={{}} />
            </button>
            <div className='quantity' ><span >
              {quantity}
            </span>
            </div>
            <button
              onClick={handleIncreaseQuantity}
              className='quantity-buttons'
            >
              <AddIcon />
            </button>
            </div>
          <div className="button-group2">
            
            <IconButton aria-label="add to cart">
              <AddShoppingCartIcon sx={{width:'30px',height:'30px'}}/>
            </IconButton>
          </div>
        </div>
        <IconButton
              aria-label="add to favorites"
              onClick={handleAddToWishlist}
              className="wishlist-button"
            >
              <FavoriteIcon  sx={{width:'40px',height:'40px',borderWidth:'2px' }} color={wishlist ? "secondary" : "action"} />
            </IconButton>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
};

export default FoodCard;
