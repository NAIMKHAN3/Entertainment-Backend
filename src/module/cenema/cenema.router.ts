import { Router } from "express";
import { verifyCenema } from "./cenema.validation";
import { createCenema, getCenema, getCinemaById } from "./cenema.controller";


const router = Router();

router.post('/create-cenema', verifyCenema, createCenema)
router.get('/get-cenema', getCenema);
router.get('/get-cenema-by-id/:id', getCinemaById);

export default router;