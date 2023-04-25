// The router file
const express = require("express");
const profile = require("../models/profile");
const isauth = require("../middleware/auth");

const router = new express.Router();

//Create profile
router.post("/profile/signup", async (req, res) => {
  const profiles = new profile(req.body);

  try {
    await profiles.save();
    const token = profiles.generateAuthToken();
    res.status(200).send({ profiles, token });
  } catch (e) {
    res.status(404).send(e);
  }
});

//Read all profiles (inactive)
router.get("/profile/get", async (req, res) => {
  try {
    const profiles = await profile.find({});
    res.send(profiles);
  } catch (e) {
    res.status(500).send(e);
  }
});

//get my profile 
router.get("/profile/me", async (req, res) => {
  try{
    const token = req.body.token.split(".")[1]; //took the token and got the payload

    const payload = JSON.parse(Buffer.from(token, "base64").toString("utf8")); //converted the payload to json
  
    const userId = payload._id; //got the user id from the payload
  
    const user = await profile.findById(userId); //found the user with the id
    
    res.status(200).send(user);
    
  }catch(e){
    res.status(500).send(e);
  }
});

router.post("/profile/login", async (req, res) => {
  try {
    const user = await profile.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/profile/logout", async (req, res) => {
  try {
    const token = req.body.token.split(".")[1]; //took the token and got the payload

    const payload = JSON.parse(Buffer.from(token, "base64").toString("utf8")); //converted the payload to json

    const userId = payload._id; //got the user id from the payload

    const user = await profile.findById(userId); //found the user with the id

    if (!user) {
      //if user not found
      return res.status(404).send();
    }

    for (let tokengot of user.tokens) {
      //looping through the tokens of the user
      if (tokengot.token === req.body.token) {
        //if the token is found
        user.tokens = user.tokens.filter(
          (tokens) => tokens.token !== tokengot.token
        ); //deleting the tokenx
      }
    }

    await user.save();
    return res.json({
      success: true,
      message: "You are Succesfully Logged Out!!",
    });
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/profile/logoutALL", isauth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/profile/auth", async (req, res) => {
  try {
    const token = req.body.token.split(".")[1]; //took the token and got the payload

    const payload = JSON.parse(Buffer.from(token, "base64").toString("utf8")); //converted the payload to json

    const userId = payload._id; //got the user id from the payload

    const user = await profile.findById(userId); //found the user with the id

    if (!user) {
      //if user not found
      return res.json({ success: false, message: "Unauthorised Access!!" });
    }

    let tokenAlive = false; //defaut tokenalive is false
    for (let tokengot of user.tokens) {
      //looping through the tokens of the user
      if (tokengot.token === req.body.token) {
        //if the token is found
        tokenAlive = true;
        break;
      }
    }
    if (tokenAlive) {
      return res.json({
        success: true,
        message: "You are already logged in!!",
        user: user.name,
      });
    } else {
      return res.json({ success: false, message: "Login Please!!" });
    }
  } catch (e) {
    if (e.name === "JsonTokenError") {
      return res.json({ success: false, message: "Unauthorised Access!!" });
    }
    if (e.name === "JsonExpiredError") {
      return res.json({ success: false, message: "Login Please!!" });
    }
    res.json({ success: false, message: "Dont know error!!" });
  }
});

module.exports = router;
