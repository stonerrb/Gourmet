require("./db/mongoose");
const express = require("express");

const profileRouter = require("./router/profile");
const MenuRouter = require("./router/menu");
const CartRouter = require("./router/cart");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(profileRouter);
app.use(MenuRouter);
app.use(CartRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
