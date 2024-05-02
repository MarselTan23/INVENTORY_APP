const bcrypt = require("bcrypt");
const User = require("./user.schema");

class UserServices {
  // Service get all User
  static async get() {
    try {
      return await User.find();
    } catch (err) {
      throw new Error("Cannot get Users :", err.message);
    }
  }

  // Service get User by id
  static async getById(id) {
    try {
      return await User.findById(id);
    } catch (err) {
      throw new Error("Cannot get User :", err.message);
    }
  }

  // Service store User
  static async store(body) {
    try {
      const passwordHased = await bcrypt.hash(body.password, 8);
      body.password = passwordHased;
      const user = new User(body);
      return await user.save();
    } catch (err) {
      throw new Error("Cannot store User :", err.message);
    }
  }

  // Service update User by id
  static async update(id, body) {
    try {
      if (body.password) {
        const passwordHased = await bcrypt.hash(body.password, 8);
        body.password = passwordHased;
      }
      const user = await User.findByIdAndUpdate(id, body);
      if (!user) throw new Error("User not found");
      return user;
    } catch (err) {
      throw new Error("Error updating User:", err.message);
    }
  }

  // Service delete User by id
  static async delete(id) {
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) throw new Error("User not found");
      return user;
    } catch (err) {
      throw new Error("Error deleting User:", err.message);
    }
  }

  // Service user login
  static async login(username, password) {
    try {
      const user = await User.findOne({ username });
      if (!user) throw new Error("");
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error("");
      return user;
    } catch (err) {
      return false;
    }
  }
}

module.exports = UserServices;
