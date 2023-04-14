require('./db/mongoose');
const express = require('express');

const profileRouter = require("./router/profile")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(profileRouter)

app.listen(port, () => {
    console.log("Server is up on port " + port)
})