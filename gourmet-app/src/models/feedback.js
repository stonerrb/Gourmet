const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    topic:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    user_name:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("feedback", feedbackSchema);
