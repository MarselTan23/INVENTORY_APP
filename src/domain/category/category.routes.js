const { Router } = require("express");
const CategoryController = require("./category.controllers");
const router = Router();
const routerWeb = Router();

// Route Api
router.get("/", CategoryController.get);
router.post("/", CategoryController.store);
router.put("/", CategoryController.update);
router.delete("/", CategoryController.delete);

// Route Web
routerWeb.get("/", CategoryController.v_index);
routerWeb.get("/add", CategoryController.v_add);
routerWeb.post("/add", CategoryController.v_add);
routerWeb.get("/edit", CategoryController.v_edit);
routerWeb.post("/edit", CategoryController.v_edit);
routerWeb.get("/delete", CategoryController.v_delete);

module.exports = { categoryRouter: router, categoryRouterWeb: routerWeb };
