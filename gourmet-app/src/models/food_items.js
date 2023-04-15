const mongoose = require("mongoose");


const foodItems = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        data:Buffer,
        contentType: String 
    },
    category:{
        type:String,
        required:true,
        trim:true
    }
})

const FoodItems = mongoose.model("FoodItems", foodItems);
module.exports = FoodItems;