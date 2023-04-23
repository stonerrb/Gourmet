import { Button, ButtonGroup, createTheme, ThemeProvider, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Card, CardMedia, CardContent, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './CartFoodCard.css'

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

const CartFoodCard = ({ foodItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(0);

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
      <Card elevation={0} sx={{ display: 'flex', height: '80px', width: '100%', margin: '0' }}>
        <CardMedia
          sx={{ width: '100px' }}
          component="img"
          image={foodItems.image}
        />
        <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="" component="div" sx={{ height: '35px', width: '200px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {foodItems.name}
          </Typography>
          <Box sx={{ margin: 0, height: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div className='button-group'>
            <button
              onClick={handleDecreaseQuantity}
              className='quantity-buttons'
            >
              {quantity === 1 ? <DeleteIcon sx={{height:'15px',width:'15px'}} /> : <RemoveIcon sx={{height:'15px',width:'15px'}}  />}
            </button>
            <div className='quantity' ><span >
              {quantity}
            </span>
            </div>
            <button
              onClick={handleIncreaseQuantity}
              className='quantity-buttons'
            >
              <AddIcon sx={{height:'15px',width:'15px'}}  />
            </button>
            </div>
            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
              Rs. {amount} /-
            </Typography>
          </Box>

        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default CartFoodCard