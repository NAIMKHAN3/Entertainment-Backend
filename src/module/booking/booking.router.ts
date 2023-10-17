import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyBooking } from "./booking.validation";
import { createBooking } from "./booking.controller";

const router = Router();

router.post('/create-booking', verifyJwt,verifyBooking,createBooking)

export default router;