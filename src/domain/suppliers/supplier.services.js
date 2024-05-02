const Supplier = require("./supplier.schema");

class SupplierServices {
  // Service get all Supplier
  static async get() {
    try {
      return await Supplier.find();
    } catch (err) {
      throw new Error("Cannot get Suppliers :", err.message);
    }
  }

  // Service get Supplier by id
  static async getById(id) {
    try {
      return await Supplier.findById(id);
    } catch (err) {
      throw new Error("Cannot get Supplier :", err.message);
    }
  }

  // Service store Supplier
  static async store(body) {
    try {
      const supplier = new Supplier(body);
      return await supplier.save();
    } catch (err) {
      throw new Error("Cannot store Supplier :", err.message);
    }
  }

  // Service update Supplier by id
  static async update(id, body) {
    try {
      const supplier = await Supplier.findByIdAndUpdate(id, body);
      if (!supplier) throw new Error("Supplier not found");
      return supplier;
    } catch (err) {
      throw new Error("Error updating Supplier:", err.message);
    }
  }

  // Service delete Supplier by id
  static async delete(id) {
    try {
      const supplier = await Supplier.findByIdAndDelete(id);
      if (!supplier) throw new Error("Supplier not found");
      return supplier;
    } catch (err) {
      throw new Error("Error deleting Supplier:", err.message);
    }
  }
}

module.exports = SupplierServices;
