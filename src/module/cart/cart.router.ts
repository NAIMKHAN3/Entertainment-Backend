import { Router } from "express";
import { verifyCart } from "./cart.validation";
import { verifyJwt } from "../../middleware/verifyJwt";
import { createCart, deleteCart, getCart } from "./cart.controller";

const router = Router();

router.post('/create-cart', verifyCart, verifyJwt, createCart)
router.get('/get-cart', verifyJwt, getCart)
router.delete('/delete-cart/:id', verifyJwt, deleteCart)

export default router;