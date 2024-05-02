const { Router } = require("express");
const ProductController = require("./product.controllers");
const router = Router();
const routerWeb = Router();

// Route Api
router.get("/", ProductController.get);
router.post("/", ProductController.store);
router.put("/", ProductController.update);
router.delete("/", ProductController.delete);

// Route Web
routerWeb.get("/", ProductController.v_index);
routerWeb.get("/add", ProductController.v_add);
routerWeb.post("/add", ProductController.v_add);
routerWeb.get("/edit", ProductController.v_edit);
routerWeb.post("/edit", ProductController.v_edit);
routerWeb.get("/delete", ProductController.v_delete);

module.exports = { productRouter: router, productRouterWeb: routerWeb };
