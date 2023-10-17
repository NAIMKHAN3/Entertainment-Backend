import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyRating } from "./rating.validation";
import { createRating } from "./rating.controller";


const router = Router();

router.post('/create-rating', verifyJwt,verifyRating,createRating)

export default router;