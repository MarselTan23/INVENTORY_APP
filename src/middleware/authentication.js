const checkAuthenticated = (request, response, next) => {
  if (request.session.isAuthenticated) {
    return next();
  }
  response.redirect("/auth/login");
};

const isAuthenticated = (request, response, next) => {
  if (request.session.isAuthenticated) return response.redirect("/dashboard");
  next();
};

module.exports = { checkAuthenticated, isAuthenticated };
