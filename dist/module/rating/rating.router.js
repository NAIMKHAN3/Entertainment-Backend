"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyJwt_1 = require("../../middleware/verifyJwt");
const rating_validation_1 = require("./rating.validation");
const rating_controller_1 = require("./rating.controller");
const router = (0, express_1.Router)();
router.post('/create-rating', verifyJwt_1.verifyJwt, rating_validation_1.verifyRating, rating_controller_1.createRating);
exports.default = router;
