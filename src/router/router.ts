import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import fileUploadRouter from "../module/fileUpload";
import superAdminRouter from "../module/superAdmin";
import categoryRouter from "../module/category/category.index";
import cenemaRouter from "../module/cenema/cenema.index";
import ratingRouter from "../rating/rating.index";
import faqRouter from "../module/faq/faq.index";
import userRouter from "../module/user/user.index";
import cartRouter from "../module/cart/cart.index";
import bookingRouter from "../module/booking/booking.index";

const router = Router();

router.use('/super-admin', superAdminRouter)
router.use('/auth', authRouter)
router.use('/file', fileUploadRouter)
router.use('/category', categoryRouter)
router.use('/cenema', cenemaRouter)
router.use('/rating', ratingRouter)
router.use('/faq', faqRouter)
router.use('/user', userRouter)
router.use('/cart', cartRouter)
router.use('/booking', bookingRouter)

export default router;