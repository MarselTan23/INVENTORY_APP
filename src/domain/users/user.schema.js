const mongoose = require("mongoose");
const timestampPlugin = require("mongoose-timestamp");
const { v4: uuidv4 } = require("uuid");

const userShema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  name: String,
  username: String,
  password: String,
});

userShema.plugin(timestampPlugin);

module.exports = mongoose.model("users", userShema);
