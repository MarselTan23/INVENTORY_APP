const Category = require("./category.schema");

class CategoryServices {
  // Service get all category
  static async get() {
    try {
      return await Category.find();
    } catch (err) {
      throw new Error("Cannot get categories :", err.message);
    }
  }

  // Service get category by id
  static async getById(id) {
    try {
      return await Category.findById(id);
    } catch (err) {
      throw new Error("Cannot get category :", err.message);
    }
  }

  // Service store category
  static async store(body) {
    try {
      const category = new Category(body);
      return await category.save();
    } catch (err) {
      throw new Error("Cannot store category :", err.message);
    }
  }

  // Service update category by id
  static async update(id, body) {
    try {
      const category = await Category.findByIdAndUpdate(id, body);
      if (!category) throw new Error("Category not found");
      return category;
    } catch (err) {
      throw new Error("Error updating category:", err.message);
    }
  }

  // Service delete category by id
  static async delete(id) {
    try {
      const category = await Category.findByIdAndDelete(id);
      if (!category) throw new Error("Category not found");
      return category;
    } catch (err) {
      throw new Error("Error deleting category:", err.message);
    }
  }
}

module.exports = CategoryServices;
