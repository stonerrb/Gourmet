const feedback = require("../models/feedback");
const express = require("express");

const router = new express.Router();

//post a feedback
router.post("/feedback", async (req, res) => {
    try {
        const {
            topic,
            description,
            user_name
        } = req.body;
        const new_feedback = new feedback({
            topic,
            description,
            user_name
        });

        await new_feedback.save();
        res.status(200).send(new_feedback);
    } catch (e) {
        res.status(500).send(e);
    }
});

//get feedback by name
router.get("/feedback/get", async (req, res) => {
    try {
        const {user_name} = req.body.user_name;
        const feedbacks = await feedback.find({user_name});
        res.status(200).send(feedbacks);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;