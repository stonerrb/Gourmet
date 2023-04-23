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
    cuisine:{
        type:String,
        required:true,
        trim:true
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
    time_to_prepare:{   
        type:Number,
        required:true,
        default:0
    },
})

// a method which changes rating cumilitively   
foodItems.methods.changeRating = async function (rating) {
    const foodItem = this;
    foodItem.rating = (foodItem.rating + rating)/2;
    await foodItem.save();
    return foodItem;
}

const FoodItems = mongoose.model("FoodItems", foodItems);
module.exports = FoodItems;