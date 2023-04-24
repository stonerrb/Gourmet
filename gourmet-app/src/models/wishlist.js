const mongoose = require('mongoose')

const FoodItems = require("../models/food_items");
const Profile = require("../models/profile");

const WishlistSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Profile,
      required: true
    },
    dish: {
      type: mongoose.Schema.Types.ObjectId,
      ref: FoodItems,
      required: true
    },
    added_date: {
      type: Date,
      default: Date.now
    }
  });
const Wishlist = mongoose.model('Wishlist', WishlistSchema);
module.exports = Wishlist