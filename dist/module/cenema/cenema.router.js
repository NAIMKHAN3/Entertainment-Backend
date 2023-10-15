"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cenema_validation_1 = require("./cenema.validation");
const cenema_controller_1 = require("./cenema.controller");
const router = (0, express_1.Router)();
router.post('/create-cenema', cenema_validation_1.verifyCenema, cenema_controller_1.createCenema);
router.get('/get-cenema', cenema_controller_1.getCenema);
exports.default = router;