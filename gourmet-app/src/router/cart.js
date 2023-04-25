const Cart = require("../models/cart");
const FoodItems = require("../models/food_items");
const Profile = require("../models/profile");
const express = require("express");

const router = new express.Router();

//if a user clicks on add to cart button on a food item make a cart for that user
router.post("/cart/AddtoCart", async (req, res) => {   
    try{
        const { profile_id, foodItemID,} = req.body;
        // if user already has a pending cart
        let cart = await Cart.findOne({ profile_id, status: "pending" })

        if (cart === null) {
            //IF NO CART IS FOUND CREATE A NEW ONE
            cart = new Cart({
                profile_id: profile_id,
                food_items: [
                  {
                    food_item: foodItemID,
                  }
                ]
              });
        }else{
            //check if the product is already in the cart
            const existent = cart.food_items.find((item) => item.food_item._id == foodItemID);

            if(existent!==undefined){
                var index = cart.food_items.findIndex((item) => item.food_item._id == foodItemID);
            }

            //find the index of the fooditem in the fooditems array with the fooditem id
            if(existent!==undefined){
                cart.food_items[index].quantity += 1;
            }else{
                cart.food_items.push({ food_item: foodItemID});
            }
        }
        await cart.save();
        res.status(200).send(cart);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
});

//remove from cart
router.post("/cart/remove", async (req, res) => {
    try{
        const { profile_id, foodItemID } = req.body;
        let cart = await Cart.findOne({ profile_id, status: "pending" });

        if(cart === null){
            throw new Error("No cart found");
        }

        //check if the product is already in the cart
        const existent = cart.food_items.find((item) => item.food_item._id == foodItemID);

        //there is this item now find the index of that item
        if(existent!==undefined){
            var index = cart.food_items.findIndex((item) => item.food_item._id == foodItemID);
        }

        if(cart.food_items[index].quantity === 1){
            cart.food_items.splice(index, 1);
        }else{
            cart.food_items[index].quantity -= 1;
        }

        await cart.save();
        res.status(200).send(cart);
    }catch(e){
        console.log(e);
        throw new Error("Unable to remove from cart");
    }
});

//give pending cart
router.get("/cart/get", async (req, res) => {
    try{
        const { profile_id } = req.body;
        let cart = await Cart.findOne({ profile_id, status: "pending" });
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
        let cart = await Cart.findOne({ profile_id, status: "pending" });
        if(!cart){
            throw new Error("No cart found");
        } 
        cart.status = "completed";
        cart.paymentMethod = paymentMethod;
        cart.discount = discount;
        cart.notes = notes;
        //643d360b16528514e6e4df27
        cart.final_price = await cart.food_items.reduce(async (accPromise, item) => {
            let acc = await accPromise;
            let foodItem = await FoodItems.findById(item.food_item.toString());
            acc = acc + foodItem.price * item.quantity;
            return acc;
          }, Promise.resolve(0));
           
        await cart.save();
        res.status(200).send(cart);
    }catch(e){
        console.log(e);
        throw new Error("Unable to checkout");
    }
}); 

//give all completed carts 
router.get("/cart/getAll", async (req, res) => {
    try{
        const { profile_id } = req.body;
        let carts = await Cart.find({ profile_id, status: "completed" })
        .sort({ created_at: -1 });
        res.status(200).send(carts);
    }
    catch(e){
        console.log(e);
        throw new Error("Unable to get carts");
    }
});

module.exports = router;