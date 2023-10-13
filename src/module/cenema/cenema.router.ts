import { Router } from "express";
import { verifyCenema } from "./cenema.validation";
import { createCenema, getCenema } from "./cenema.controller";


const router = Router();

router.post('/create-cenema', verifyCenema, createCenema)
router.get('/get-cenema', getCenema)

export default router;