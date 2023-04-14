// The router file for food_items
const express = require("express")
const FoodItem = require("../models/food_items");
// const auth = require("../middleware/auth")

const router = new express.Router();

//for developer
//add food item
router.post('/dev/items',async (req,res) => {

    const item = new FoodItem(req.body);
    
    try{
        await item.save();
        res.status(200).send({ item })
    }catch(e){
        res.status(404).send(e)
    }
})

module.exports = router