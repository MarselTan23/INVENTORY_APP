const { Router } = require("express");
const SupplierController = require("./supplier.controllers");
const router = Router();
const routerWeb = Router();

// Route Api
router.get("/", SupplierController.get);
router.post("/", SupplierController.store);
router.put("/", SupplierController.update);
router.delete("/", SupplierController.delete);

// Route Web
routerWeb.get("/", SupplierController.v_index);
routerWeb.get("/add", SupplierController.v_add);
routerWeb.post("/add", SupplierController.v_add);
routerWeb.get("/edit", SupplierController.v_edit);
routerWeb.post("/edit", SupplierController.v_edit);
routerWeb.get("/delete", SupplierController.v_delete);

module.exports = { supplierRouter: router, supplierRouterWeb: routerWeb };
