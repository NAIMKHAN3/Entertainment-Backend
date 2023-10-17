"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyJwt_1 = require("../../middleware/verifyJwt");
const auth_validation_1 = require("../auth/auth.validation");
const controller_1 = require("./controller");
const verifySuperAdmin_1 = require("../../middleware/verifySuperAdmin");
const router = (0, express_1.Router)();
router.post('/create-admin', verifyJwt_1.verifyJwt, verifySuperAdmin_1.verifySuperAdmin, auth_validation_1.verifyUserReg, controller_1.createAdmin);
router.get('/get-all-user', controller_1.getAllUser);
router.get('/get-all-admin', controller_1.getAllAdmin);
router.get('/get-all-super-admin', controller_1.getAllSuperAdmin);
exports.default = router;
