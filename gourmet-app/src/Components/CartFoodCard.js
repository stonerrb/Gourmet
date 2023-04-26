import {
  Button,
  ButtonGroup,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState,useEffect } from "react";
import { Card, CardMedia, CardContent, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./CartFoodCard.css";
import { theme } from "./Theme";
import Cookies from "js-cookie";

const CartFoodCard = ({foodItems,number}) => {
  


  const AddtoCard= async() => {
    let profile_id = Cookies.get("userid");
    let foodItemID = foodItems._id;
    console.log(profile_id,foodItemID);
    const res = await fetch("/cart/AddtoCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        profile_id,
        foodItemID,
      }),
    });
    const data = await res.json();
  };

  useEffect(() => {
  const CartData = async () => {
    try {
      let profile_id = Cookies.get("userid");
      const response = await fetch(`/cart/get?profile_id=${profile_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const cart = await response.json(); 
    }
    catch (e) {
      console.error(e);
    }
  };
  CartData();
  }, []);

  const removeCart= async() => {
    let profile_id = Cookies.get("userid");
    let foodItemID = foodItems._id;
    console.log(profile_id,foodItemID);
    const res = await fetch("/cart/remove", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        profile_id,
        foodItemID,
      }),
    });
    const data = await res.json();
  };

  //set quatity equal to cart.foodItems.food_item.quantity where food_item should match with foodItems._id

  
  


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
                onClick={removeCart}
                className="quantity-buttons-cart"
              >
                {foodItems.quantity === 1 ? (
                  <DeleteIcon sx={{ height: "15px", width: "15px" }} />
                ) : (
                  <RemoveIcon sx={{ height: "15px", width: "15px" }} />
                )}
              </button>
           
              <div className="quantity">
                <span>{foodItems.quantity}</span>
              </div>
              
              <button
                onClick={AddtoCard}
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
              Rs.{foodItems.price}*{foodItems.quantity}  /-
            </Typography>
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default CartFoodCard;
