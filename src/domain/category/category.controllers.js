const CategoryServices = require("./category.services");

class CategoryController {
  // Controller get category
  static async get(request, response, next) {
    try {
      const { id } = request.query;
      if (id) return response.json(await CategoryServices.getById(id));
      return response.json(await CategoryServices.get());
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller store category
  static async store(request, response, next) {
    try {
      return response.json(await CategoryServices.store(request.body));
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller update category
  static async update(request, response, next) {
    try {
      return response.json(
        await CategoryServices.update(request.query.id, request.body)
      );
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller delete category
  static async delete(request, response, next) {
    try {
      return response.json(await CategoryServices.delete(request.query.id));
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller view category/index
  static async v_index(request, response, next) {
    const category = await CategoryServices.get();
    response.render("category/index", {
      title: "Category",
      data: category,
    });
  }

  // Controller view add
  static async v_add(request, response, next) {
    if (request.method == "GET") {
      response.render("category/add", {
        title: "Add Category",
      });
    } else {
      await CategoryServices.store(request.body);
      response.redirect("/category");
    }
  }

  // Controller view edit
  static async v_edit(request, response, next) {
    const { id } = request.query;
    if (request.method == "GET") {
      const category = await CategoryServices.getById(id);
      response.render("category/edit", {
        title: "Edit Category",
        data: category,
      });
    } else {
      await CategoryServices.update(id, request.body);
      response.redirect("/category");
    }
  }

  // Controller view delete
  static async v_delete(request, response, next) {
    const { id } = request.query;
    if (!id) return CategoryServices.redirect("/category");
    await CategoryServices.delete(id);
    return response.redirect("/category");
  }
}

module.exports = CategoryController;
