const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://steiner:Rushabh11@gourmet-api.tbr3i50.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

module.exports = mongoose;
