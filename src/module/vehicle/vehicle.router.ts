import { Router } from "express";
import { verifyVehicle } from "./vehicle.validation";
import { createVehicle, getVehicle } from "./vehicle.controller";

const router = Router();

router.post('/create-vehicle', verifyVehicle, createVehicle)
router.get('/get-vehicle', getVehicle)

export default router;