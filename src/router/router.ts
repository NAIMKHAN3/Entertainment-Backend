import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import fileUploadRouter from "../module/fileUpload";
import superAdminRouter from "../module/superAdmin";
import categoryRouter from "../module/category/category.index";
import cenemaRouter from "../module/cenema/cenema.index";
import faqRouter from "../module/faq/faq.index";
import userRouter from "../module/user/user.index";
import cartRouter from "../module/cart/cart.index";
import bookingRouter from "../module/booking/booking.index";
import ratingRouter from "../module/rating/rating.index";
import blogRouter from "../module/blog/blog.index";

const router = Router();

router.use('/super-admin', superAdminRouter)
router.use('/auth', authRouter)
router.use('/file', fileUploadRouter)
router.use('/category', categoryRouter)
router.use('/cenema', cenemaRouter)
router.use('/faq', faqRouter)
router.use('/user', userRouter)
router.use('/cart', cartRouter)
router.use('/booking', bookingRouter)
router.use('/rating', ratingRouter)
router.use('/blog', blogRouter)

export default router;