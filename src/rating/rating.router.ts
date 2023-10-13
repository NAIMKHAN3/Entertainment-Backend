import { Router } from "express";
import { verifyRating } from "./rating.validation";
import { createRating, getRating } from "./rating.controller";
import { verifyJwt } from "../middleware/verifyJwt";

const router = Router();

router.post('/create-rating',verifyJwt, verifyRating,createRating)
router.get('/get-rating',getRating)

export default router;