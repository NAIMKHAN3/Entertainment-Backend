import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyRating } from "./rating.validation";
import { createRating, getRatings } from "./rating.controller";


const router = Router();

router.post('/create-rating', verifyJwt,verifyRating,createRating)
router.get('/get-ratings', getRatings)

export default router;