const UserServices = require("../users/user.services");

class AuthController {
  static async login(request, response, next) {
    response.redirect("/dashboard");
  }

  static async v_login(request, response, next) {
    if (request.method == "GET") {
      response.render("auth/login.ejs", {
        title: "Login",
      });
    } else {
      const { username, password } = request.body;
      const user = await UserServices.login(username, password);
      if (user) {
        request.session.isAuthenticated = true;
        request.session.name = user.name;
        return response.redirect("/dashboard");
      }
      response.redirect("/auth/login");
    }
  }

  static async logout(request, response, next) {
    request.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
      } else {
        response.redirect("/auth/login");
      }
    });
  }
}

module.exports = AuthController;
