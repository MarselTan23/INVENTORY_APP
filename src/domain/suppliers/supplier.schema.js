const mongoose = require("mongoose");
const timestampPlugin = require("mongoose-timestamp");
const { v4: uuidv4 } = require("uuid");

const supplierShema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  title: String,
});

supplierShema.plugin(timestampPlugin);

module.exports = mongoose.model("suppliers", supplierShema);
