const FoodItems = require("../models/food_items");
const Profile = require("../models/profile");
const Wishlist = require('../models/wishlist')
const express = require("express");

const router = new express.Router();

router.get("/wishlist/get", async(req,res)=>{
    try{
        const { user } = req.body;
        const wishlist = await Wishlist.find({user: user})
        res.status(200).send(wishlist);
    }
    catch(e){
        console.log(e);
        throw new Error("Unable to get wishlist");
    }
}
)

router.post("/wishlist/add", async(req,res)=>{
    try{
        const { user, dish,} = req.body;
        console.log(user, dish);

        const items = await Wishlist.findOne()
        console.log(items);
       
        var wishlist = new Wishlist({
            user: user,
            dish: dish
        })
        await wishlist.save();
        res.status(200).send(wishlist);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
      }
})

router.delete('/wishlist/delete', async(req,res)=>{
   try{
    const wishlistItemId = req.body;
    console.log(wishlistItemId);
    const wishlistItem = await Wishlist.find(wishlistItemId);
    console.log(wishlistItem);
    if (!wishlistItem) {
        return res.status(404).send('Wishlist item not found');
      }
    //   const index = await Wishlist.findIndex(wishlistItemId);
    // if (index > -1) {
    //   Wishlist.splice(index, 1);
    //   await user.save();
    // }

    await Wishlist.findByIdAndDelete(wishlistItemId);

    res.status(200).send('Wishlist item removed successfully');
   } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
})

module.exports = router;