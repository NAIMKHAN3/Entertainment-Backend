"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyJwt_1 = require("../../middleware/verifyJwt");
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = (0, express_1.Router)();
router.get('/get-profile', verifyJwt_1.verifyJwt, user_controller_1.getProfile);
router.get('/get-profile-by-id/:id', verifyJwt_1.verifyJwt, user_controller_1.getProfileById);
router.put('/update-profile/:id', user_validation_1.verifyProfileUpdate, verifyJwt_1.verifyJwt, user_controller_1.updateProfile);
exports.default = router;
