import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import fileUploadRouter from "../module/fileUpload";

const router = Router();

router.use('/auth', authRouter)
router.use('/file', fileUploadRouter)

export default router;