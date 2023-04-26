const express = require("express");
const FoodItems = require("../models/food_items");
// const multer = require('multer')
const router = new express.Router();

//get item with cusine type
router.get("/menu/get/:cuisine", async (req, res) => {
  try {
    const cuisine = req.params.cuisine;
    console.log(cuisine)
    const food_item = await FoodItems.find({ cuisine });
    console.log(food_item);
    res.send({ food_item });
  } catch (e) {
    res.status(404).send();
  }
});

//add a food item
router.post("/menu/add/foodItem", async (req, res) => {
  try {
    const { name,price,description,image,cuisine,time_to_prepare } = req.body;
    const foodItem = new FoodItems({
      name,
      price,
      description,
      image,
      cuisine,
      time_to_prepare
    });
    await foodItem.save();
    res.status(200).send(foodItem);
  } catch (e) {
    console.log(e);
    throw new Error("Unable to add food item");
  }
});

//Get menu items
router.get("/menu/get", async (req, res) => {
  try {
    const food_item = await FoodItems.find({});
    
    res.send({ food_item });
  } catch (e) {
    res.status(404).send();
  }
});

router.get("/menu/get/cart/:id", async (req, res) => {
  try {
    const food_id = req.params.id
    const food_item = await FoodItems.findById(food_id);
    res.send(food_item);
  } catch (e) {
    res.status(404).send();
  }
});


//add ratign to a food item
router.post("/menu/rating", async (req, res) => {
  try {
    const { foodItemID, rating } = req.body;
    const foodItem = await FoodItems.findById(foodItemID);
    if (!foodItem) {
      throw new Error("No food item found");
    }
    foodItem.changeRating(rating);
    res.status(200).send(foodItem);
  } catch (e) {
    console.log(e);
    throw new Error("Unable to add rating");
  }
});
module.exports = router;
