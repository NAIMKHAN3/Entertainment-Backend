"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyJwt_1 = require("../../middleware/verifyJwt");
const booking_validation_1 = require("./booking.validation");
const booking_controller_1 = require("./booking.controller");
const router = (0, express_1.Router)();
router.post('/create-booking', verifyJwt_1.verifyJwt, booking_validation_1.verifyBooking, booking_controller_1.createBooking);
router.get('/get-bookings', booking_controller_1.getBooking);
router.get('/get-booking-by-user', verifyJwt_1.verifyJwt, booking_controller_1.getBookingByUser);
router.get('/get-booking-by-id/:id', verifyJwt_1.verifyJwt, booking_controller_1.getBookingById);
router.patch('/update-booking-status/:id', booking_validation_1.verifyStatusUpdate, booking_controller_1.updateBookingStatus);
router.put('/update-booking/:id', booking_validation_1.verifyBookingUpdate, booking_controller_1.updateBooking);
router.put('/update-payment-status/:id', booking_validation_1.verifyPaymentStatusUpdate, booking_controller_1.updatePaymentStatus);
router.delete('/delete-booking/:id', booking_controller_1.deleteBooking);
exports.default = router;
