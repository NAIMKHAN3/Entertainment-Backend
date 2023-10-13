import { Router } from "express";
import { verifyRating } from "./rating.validation";
import { createRating } from "./rating.controller";
import { verifyJwt } from "../middleware/verifyJwt";

const router = Router();

router.post('/create-rating',verifyJwt, verifyRating,createRating)

export default router;