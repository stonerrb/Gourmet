const express = require("express")
const FoodItems = require("../models/food_items");
const multer = require('multer')
const router = new express.Router();

// create storage
const Storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage: Storage
}).single('testImage');

//Create menu
router.post('/menu/add',async (req,res) => {
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        } else {
            const newImage = new FoodItems({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,    
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            })

            newImage.save().then(()=> res.send("Success!")).catch((err)=> console.log(err))
        }
    })
})

//Get menu items
router.get('/menu/get',async (req,res) => {
    try{
        const food_item = await FoodItems.findOne({});
        res.send({food_item});
    }catch(e){
        res.status(404).send();
    }
})

module.exports=router