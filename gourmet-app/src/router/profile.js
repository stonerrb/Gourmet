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

//Read all profiles
router.get("/profile/get", async (req, res) => {
  try {
    const profiles = await profile.find({});
    res.send(profiles);
  } catch (e) {
    res.status(500).send(e);
  }
});

//get my profile
router.get("/profile/me", isauth, async (req, res) => {
  res.send(req.user);
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

router.post("/profile/logout", isauth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
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

module.exports = router;
