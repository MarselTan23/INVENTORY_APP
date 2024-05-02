const { Router } = require("express");
const UserController = require("./user.controllers");
const router = Router();
const routerWeb = Router();

// Route Api
router.get("/", UserController.get);
router.post("/", UserController.store);
router.put("/", UserController.update);
router.delete("/", UserController.delete);

// Route Web
routerWeb.get("/", UserController.v_index);
routerWeb.get("/add", UserController.v_add);
routerWeb.post("/add", UserController.v_add);
routerWeb.get("/edit", UserController.v_edit);
routerWeb.post("/edit", UserController.v_edit);
routerWeb.get("/delete", UserController.v_delete);

module.exports = { userRouter: router, userRouterWeb: routerWeb };
