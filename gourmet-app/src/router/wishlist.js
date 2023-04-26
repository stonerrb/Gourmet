const FoodItems = require("../models/food_items");
const Profile = require("../models/profile");
const Wishlist = require("../models/wishlist");
const mongoose = require("mongoose");
const express = require("express");

const router = new express.Router();

router.get("/wishlist/get", async (req, res) => {
  try {
    const { profile_id } = req.query;
    const wishlist = await Wishlist.findOne({ profile_id });
    res.status(200).send(wishlist);
  } catch (e) {
    console.log(e);
    throw new Error("Unable to get wishlist");
  }
});

//add item to wishlist
router.post("/wishlist/add", async (req, res) => {
  try {
    const { profile_id, food_item } = req.body;

    let wishlist = await Wishlist.findOne({ profile_id });

    console.log(wishlist);

    if (wishlist === null) {
      // no wishlist yet make a new one
      wishlist = new Wishlist({
        profile_id: profile_id,
        food_items: [
          {
            food_item: food_item,
          },
        ],
      });
    } else {
      //already have a wishlist so add this item too
      wishlist.food_items.push({ food_item: food_item });
    }

    await wishlist.save();
    res.status(200).send(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.post("/wishlist/delete", async (req, res) => {
  try {
    const { profile_id, food_item } = req.body;
    const wishlist = await Wishlist.findOne({ profile_id });

    if (wishlist === null) {
      throw new Error("No cart found");
    } else {
      // iterate through food_items array in wishlist and delete it
      for (var i = 0; i < wishlist.food_items.length; i++) {
        if (wishlist.food_items[i].food_item == food_item) {
          wishlist.food_items.splice(i, 1);
        }
      }
    }
    await wishlist.save();
    return res.status(200).send("Item deleted Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
