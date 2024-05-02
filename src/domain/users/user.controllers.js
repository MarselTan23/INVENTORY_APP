const UserServices = require("./user.services");

class UserController {
  // Controller get User
  static async get(request, response, next) {
    try {
      const { id } = request.query;
      if (id) return response.json(await UserServices.getById(id));
      return response.json(await UserServices.get());
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller store User
  static async store(request, response, next) {
    try {
      return response.json(await UserServices.store(request.body));
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller update User
  static async update(request, response, next) {
    try {
      return response.json(
        await UserServices.update(request.query.id, request.body)
      );
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller delete User
  static async delete(request, response, next) {
    try {
      return response.json(await UserServices.delete(request.query.id));
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }

  // Controller view user/index
  static async v_index(request, response, next) {
    const users = await UserServices.get();
    response.render("user/index", {
      title: "User",
      data: users,
    });
  }

  // Controller view add
  static async v_add(request, response, next) {
    if (request.method == "GET") {
      response.render("user/add", {
        title: "Add User",
      });
    } else {
      await UserServices.store(request.body);
      response.redirect("/user");
    }
  }

  // Controller view edit
  static async v_edit(request, response, next) {
    const { id } = request.query;
    if (request.method == "GET") {
      const user = await UserServices.getById(id);
      response.render("user/edit", {
        title: "Edit User",
        data: user,
      });
    } else {
      await UserServices.update(id, request.body);
      response.redirect("/user");
    }
  }

  // Controller view delete
  static async v_delete(request, response, next) {
    const { id } = request.query;
    if (!id) return response.redirect("/user");
    await UserServices.delete(id);
    return response.redirect("/user");
  }
}

module.exports = UserController;
