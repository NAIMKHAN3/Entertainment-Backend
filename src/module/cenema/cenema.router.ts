import { Router } from "express";
import { verifyCenema, verifyCenemaUpdate } from "./cenema.validation";
import { createCenema, deleteCinema, getCenema, getCinemaById, updateCenema } from "./cenema.controller";


const router = Router();

router.post('/create-cenema', verifyCenema, createCenema)
router.put('/update-cenema/:id', verifyCenemaUpdate, updateCenema)
router.delete('/delete-cenema/:id', deleteCinema)
router.get('/get-cenema', getCenema);
router.get('/get-cenema-by-id/:id', getCinemaById);

export default router;