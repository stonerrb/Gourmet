const mongoose = require("mongoose");
const validator = require("validator");
const crypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const FoodItems = require("../models/food_items");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.length < 8) {
        throw new Error("Password must be at least 8 characters");
      } else if (value.includes("password")) {
        throw new Error("Password should not contain password!");
      }
    },
  },
  phone_number: {
    type: Number,
    required: false,
    trim: true,
    unique: true,
  },
  wishlist: [
    {
      food_item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodItems",
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//create auth token for session
profileSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString()},"gourmetsecret",{expiresIn:'7d'});

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

//find user to login
profileSchema.statics.findByCredentials = async (email, password) => {
  const user = await profile.findOne({ email: email });
  
  if (!user) {
    throw new Error("No user with this email");
  }

  const isMatch = await crypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};

//Hash the plain password
profileSchema.pre("save", async function (next) {
  const profile = this;

  if (profile.isModified("password")) {
    profile.password = await crypt.hash(profile.password, 8);
  }
  next();
});

const profile = mongoose.model("Profile", profileSchema);

module.exports = profile;
