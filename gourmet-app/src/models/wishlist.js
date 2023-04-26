const mongoose = require('mongoose')

const FoodItems = require("../models/food_items");
const Profile = require("../models/profile");

const WishlistSchema = new mongoose.Schema({
  profile_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Profile,
      required: true
    },
    food_items:[{
      food_item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: FoodItems,
          required: true,
      }
  }],
    added_date: {
      type: Date,
      default: Date.now
    }
  });
const Wishlist = mongoose.model('Wishlist', WishlistSchema);
module.exports = Wishlist