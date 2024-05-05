const { Router } = require('express');
const DashboardController = require('./dashboard.dontrollers');
const router = Router();

router.get("/api/:categoryId", DashboardController.index);
// Router Web
router.get('/', DashboardController.v_index);

module.exports = { dashboardRouter: router }