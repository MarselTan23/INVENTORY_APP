const { Router } = require("express");
const AuthController = require("./auth.controllers");
const { isAuthenticated } = require("../../middleware/authentication");
const router = Router();

router.get("/login", isAuthenticated, AuthController.v_login);
router.post("/login", isAuthenticated, AuthController.v_login);
router.get("/logout", AuthController.logout);

module.exports = { authRouter: router };
