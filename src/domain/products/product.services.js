const Product = require("./product.schema");

class ProductServices {
  // Service get all Product
  static async get() {
    try {
      return await Product.find();
    } catch (err) {
      throw new Error("Cannot get products :", err.message);
    }
  }

  // Service get Product by id
  static async getById(id) {
    try {
      return await Product.findById(id);
    } catch (err) {
      throw new Error("Cannot get Product :", err.message);
    }
  }

  // Service store Product
  static async store(body) {
    try {
      const product = new Product(body);
      return await product.save();
    } catch (err) {
      throw new Error("Cannot store Product :", err.message);
    }
  }

  // Service update Product by id
  static async update(id, body) {
    try {
      const product = await Product.findByIdAndUpdate(id, body);
      if (!product) throw new Error("Product not found");
      return product;
    } catch (err) {
      throw new Error("Error updating Product:", err.message);
    }
  }

  // Service delete Product by id
  static async delete(id) {
    try {
      const product = await Product.findByIdAndDelete(id);
      if (!product) throw new Error("Product not found");
      return product;
    } catch (err) {
      throw new Error("Error deleting Product:", err.message);
    }
  }


  // Service get Products by category
  static async getByCategory(categories) {

    try {
      return await Product.find({ category: categories });
    } catch (err) {
      throw new Error("Cannot get Products by category: ", err.message);
    }
  }


}

module.exports = ProductServices;
