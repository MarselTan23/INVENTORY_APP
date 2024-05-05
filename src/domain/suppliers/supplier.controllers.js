const SupplierServices = require("./supplier.services");

class SupplierController {
  // Controller get Supplier
  static async get(request, response, next) {
    try {
      const { id } = request.query;
      if (id) return response.json(await SupplierServices.getById(id));
      return response.json(await SupplierServices.get());
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller store Supplier
  static async store(request, response, next) {
    try {
      return response.json(await SupplierServices.store(request.body));
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller update Supplier
  static async update(request, response, next) {
    try {
      return response.json(
        await SupplierServices.update(request.query.id, request.body)
      );
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller delete Supplier
  static async delete(request, response, next) {
    try {
      return response.json(await SupplierServices.delete(request.query.id));
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller view supplier/index
  static async v_index(request, response, next) {
    const supplier = await SupplierServices.get();
    response.render("supplier/index", {
      title: "Supplier",
      data: supplier,
    });
  }

  // Controller view add
  static async v_add(request, response, next) {
    if (request.method == "GET") {
      response.render("supplier/add", {
        title: "Add Supplier",
      });
    } else {
      await SupplierServices.store(request.body);
      response.redirect("/supplier");
    }
  }

  // Controller view edit
  static async v_edit(request, response, next) {
    const { id } = request.query;
    if (request.method == "GET") {
      const supplier = await SupplierServices.getById(id);
      response.render("supplier/edit", {
        title: "Edit Supplier",
        data: supplier,
      });
    } else {
      await SupplierServices.update(id, request.body);
      response.redirect("/supplier");
    }
  }

  // Controller view delete
  static async v_delete(request, response, next) {
    const { id } = request.query;
    if (!id) return SupplierServices.redirect("/supplier");
    await SupplierServices.delete(id);
    return response.redirect("/supplier");
  }
}

module.exports = SupplierController;
