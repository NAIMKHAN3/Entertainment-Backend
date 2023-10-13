import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import fileUploadRouter from "../module/fileUpload";
import superAdminRouter from "../module/superAdmin";
import categoryRouter from "../category/category.index";
import cenemaRouter from "../cenema/cenema.index";
import ratingRouter from "../rating/rating.index";

const router = Router();

router.use('/super-admin', superAdminRouter)
router.use('/auth', authRouter)
router.use('/file', fileUploadRouter)
router.use('/category', categoryRouter)
router.use('/cenema', cenemaRouter)
router.use('/rating', ratingRouter)

export default router;