const mongoose = require("mongoose");

const Product = new mongoose.Schema(

  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  }

);

module.exports = new mongoose.model("Product",Product);