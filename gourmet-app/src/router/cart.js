const Cart = require("../models/cart");
const FoodItems = require("../models/food_items");
const Profile = require("../models/profile");
const express = require("express");

const router = express.Router();

//Create a cart;
// router.post("/cart/create", async (req, res) => {