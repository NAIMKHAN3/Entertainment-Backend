import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyBooking, verifyBookingUpdate, verifyPaymentStatusUpdate, verifyStatusUpdate } from "./booking.validation";
import { createBooking, deleteBooking, getBooking, getBookingById, getBookingByUser, updateBooking, updateBookingStatus, updatePaymentStatus } from "./booking.controller";

const router = Router();

router.post('/create-booking', verifyJwt,verifyBooking,createBooking)
router.get('/get-bookings', getBooking)
router.get('/get-booking-by-user', verifyJwt, getBookingByUser)
router.get('/get-booking-by-id/:id', verifyJwt, getBookingById)
router.patch('/update-booking-status/:id', verifyStatusUpdate, updateBookingStatus)
router.put('/update-booking/:id', verifyBookingUpdate,  updateBooking)
router.put('/update-payment-status/:id', verifyPaymentStatusUpdate,  updatePaymentStatus)
router.delete('/delete-booking/:id',  deleteBooking)

export default router;