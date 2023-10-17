import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyBooking, verifyStatusUpdate } from "./booking.validation";
import { createBooking, getBooking, getBookingByUser, updateBookingStatus } from "./booking.controller";

const router = Router();

router.post('/create-booking', verifyJwt,verifyBooking,createBooking)
router.get('/get-bookings', getBooking)
router.get('/get-booking-by-user', verifyJwt, getBookingByUser)
router.patch('/update-booking-status/:id', verifyStatusUpdate, updateBookingStatus)

export default router;