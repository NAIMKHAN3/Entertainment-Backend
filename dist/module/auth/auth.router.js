"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_validation_1 = require("./auth.validation");
const auth_controller_1 = require("./auth.controller");
const verifyJwt_1 = require("../../middleware/verifyJwt");
const router = (0, express_1.Router)();
router.post('/create-user', auth_validation_1.verifyUserReg, auth_controller_1.createUser);
router.post('/login-user', auth_validation_1.verifyUserLogin, auth_controller_1.loginUser);
router.post('/change-password', verifyJwt_1.verifyJwt, auth_validation_1.verifyChangePassword, auth_controller_1.changePassword);
exports.default = router;
