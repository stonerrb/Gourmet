const FoodItems = require("../models/food_items");
const Profile = require("../models/profile");
const { default: mongoose } = require("mongoose");

const CartSchema = new mongoose.Schema({
    created_at: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: "pending",
    },
    profile_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Profile,
        required: true,
    },
    food_items:[{
        food_item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: FoodItems,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
    }],
    PaymentMethod: {
        type: String,
    },
    discount: {
        type: Number,
        default: 0,
    },
    notes: {
        type: String,
        default: "",
    },
    final_price: {
        type: Number,
        required: true,
    },
})

// function to add to cart
// CartSchema.methods.addToCart = async function (profile_id, foodItemID, quantity = '1') {
//     try {
//         console.log(profile_id, foodItemID, quantity);
//         // if user already has a pending cart
//         let cart = await Cart.findOne({ profile_id, status: "pending" })

//         if (!cart) {
//             cart = new Cart({ profile_id }, { food_items: { food_item: foodItemID, quantity } });
//         }else{
//             //check if the product is already in the cart
//             const existAlready = cart.food_items.find((item) => item.food_item._id == foodItemID);
//             if(existAlready){
//                 cart.food_items[existAlready].quantity += quantity;
//             }else{
//                 cart.food_items.push({ food_item: foodItemID, quantity });
//             }
//         }
//         await cart.save();

//         return cart;
//     }
//     catch (e) {
//         console.log(e);
//         throw new Error("Unable to add to cart");
//     }
// }

async function getCart(profile_id){
    try{
        let cart = await Cart.findOne({ profile_id, status: "completed" }).sort({created_at: -1})
        return cart;
    }catch(e){
        console.log(e);
        throw new Error("Unable to get cart");
    }
}

module.exports = mongoose.model("Cart", CartSchema);
// module.exports = CartSchema.methods.addToCart;




