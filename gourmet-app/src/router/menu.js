const express = require("express");
const FoodItems = require("../models/food_items");
// const multer = require('multer')
const router = new express.Router();

// create storage
// const Storage = multer.diskStorage({
//     destination: "uploads",
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })

// const upload = multer({
//     storage: Storage
// }).single('testImage');

//Create menu
// router.post("/menu/add", async (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const newImage = new FoodItems({
//         name: req.body.name,
//         price: req.body.price,
//         description: req.body.description,
//         category: req.body.category,
//         image: {
//           data: req.file.filename,
//           contentType: "image/png",
//         },
//       });

//       newImage
//         .save()
//         .then(() => res.send("Success!"))
//         .catch((err) => console.log(err));
//     }
//   });
// });

//add a food item
router.post("/menu/add/foodItem", async (req, res) => {
  try {
    const { name,price,description,image,cuisine,time_to_prepare } = req.body;
    const foodItem = new FoodItems({
      name,
      price,
      description,
      image,
      cuisine,
      time_to_prepare
    });
    await foodItem.save();
    res.status(200).send(foodItem);
  } catch (e) {
    console.log(e);
    throw new Error("Unable to add food item");
  }
});

//Get menu items
router.get("/menu/get", async (_req, res) => {
  try {
    const food_item = await FoodItems.find({});
    // console.log(food_item);
    res.send({ food_item });
  } catch (e) {
    res.status(404).send();
  }
});

//add ratign to a food item
router.post("/menu/rating", async (req, res) => {
  try {
    const { foodItemID, rating } = req.body;
    const foodItem = await FoodItems.findById(foodItemID);
    if (!foodItem) {
      throw new Error("No food item found");
    }
    foodItem.changeRating(rating);
    res.status(200).send(foodItem);
  } catch (e) {
    console.log(e);
    throw new Error("Unable to add rating");
  }
});
module.exports = router;
