const mongoose = require("mongoose");
const timestampPlugin = require("mongoose-timestamp");
const { v4: uuidv4 } = require("uuid");

const productShema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  title: String,
  price: Number,
  category: String,
  supplier: String,
});

productShema.plugin(timestampPlugin);

module.exports = mongoose.model("products", productShema);
