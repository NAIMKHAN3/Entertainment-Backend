import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import fileUploadRouter from "../module/fileUpload";
import superAdminRouter from "../module/superAdmin";
import vehicleRouter from "../module/vehicle/vehicle.index";

const router = Router();

router.use('/super-admin', superAdminRouter)
router.use('/auth', authRouter)
router.use('/file', fileUploadRouter)
router.use('/vehicle', vehicleRouter)

export default router;