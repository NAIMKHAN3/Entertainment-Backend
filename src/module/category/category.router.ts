import { Router } from "express";
import { verifyCategory } from "./category.validation";
import { createCategory, getCategory, getCategoryById, updateCategory } from "./category.controller";

const router = Router();

router.post('/create-category', verifyCategory,createCategory)
router.post('/update-category/:id', verifyCategory,updateCategory)
router.get('/get-category', getCategory)
router.get('/get-category-by-id/:id', getCategoryById)

export default router;