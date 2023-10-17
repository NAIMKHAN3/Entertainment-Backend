"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyJwt_1 = require("../../middleware/verifyJwt");
const booking_validation_1 = require("./booking.validation");
const booking_controller_1 = require("./booking.controller");
const router = (0, express_1.Router)();
router.post('/create-booking', verifyJwt_1.verifyJwt, booking_validation_1.verifyBooking, booking_controller_1.createBooking);
exports.default = router;
