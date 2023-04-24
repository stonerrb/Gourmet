const Cart = require("../models/cart");
const FoodItems = require("../models/food_items");
const Profile = require("../models/profile");
const express = require("express");

const router = new express.Router();

//if a user clicks on add to cart button on a food item make a cart for that user
router.post("/cart/AddtoCart", async (req, res) => {   
    try{
        const { profile_id, foodItemID,quantity = '1'} = req.body;
        console.log(profile_id, foodItemID);
        // if user already has a pending cart
        let cart = await Cart.findOne({ profile_id, status: "pending" })
        console.log(cart);
        if (cart === null) {
            console.log("i am here");
            //IF NO CART IS FOUND CREATE A NEW ONE
            cart = new Cart({
                profile_id: profile_id,
                food_items: [
                  {
                    food_item: foodItemID,
                    quantity: quantity
                  }
                ]
              });
              await cart.save();
            console.log("i found it!!");
        }else{  
            //check if the product is already in the cart
            const existAlready = cart.food_items.find((item) => item.food_item._id == foodItemID);
            if(existAlready){
                cart.food_items[existAlready].quantity += quantity;
            }else{
                cart.food_items.push({ food_item: foodItemID, quantity });
            }
        }
        await cart.save();
        res.status(200).send(cart);
    }catch(e){
        res.status(500).send(e);
    }
});

//fetch the latest completed cart for a user
//will give the latest cart for a user
router.get("/cart/get", async (req, res) => {
    try{
        const { profile_id } = req.body;
        const cart = getCart(profile_id);
        res.status(200).send(cart);
    }
    catch(e){
        console.log(e);
        throw new Error("Unable to get cart");
    }
});

//Checkout the cart
router.post("/cart/checkout", async (req, res) => {
    try{
        const { profile_id, paymentMethod, discount, notes } = req.body;
        const cart = await Cart.findOne({ profile_id, status: "pending" });
        if(!cart){
            throw new Error("No cart found");
        }
        cart.status = "completed";
        cart.paymentMethod = paymentMethod;
        cart.discount = discount;
        cart.notes = notes;
        cart.final_price = cart.food_items.reduce((acc, item) => acc + item.food_item.price * item.quantity, 0);
        //according to copilot ye final price bana dega <3 
        await cart.save();
        res.status(200).send(cart);
    }catch(e){
        console.log(e);
        throw new Error("Unable to checkout");
    }
}); 

module.exports = router;