import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import fileUploadRouter from "../module/fileUpload";
import superAdminRouter from "../module/superAdmin";

const router = Router();

router.use('/super-admin', superAdminRouter)
router.use('/auth', authRouter)
router.use('/file', fileUploadRouter)

export default router;