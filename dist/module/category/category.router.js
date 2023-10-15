"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_validation_1 = require("./category.validation");
const category_controller_1 = require("./category.controller");
const router = (0, express_1.Router)();
router.post('/create-category', category_validation_1.verifyCategory, category_controller_1.createCategory);
router.get('/get-category', category_controller_1.getCategory);
exports.default = router;
