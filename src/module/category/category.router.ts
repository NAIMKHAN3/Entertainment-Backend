import { Router } from "express";
import { verifyCategory } from "./category.validation";
import { createCategory, deleteCategory, getCategory, getCategoryById, updateCategory } from "./category.controller";

const router = Router();

router.post('/create-category', verifyCategory,createCategory)
router.put('/update-category/:id', verifyCategory,updateCategory)
router.get('/get-category', getCategory)
router.get('/get-category-by-id/:id', getCategoryById)
router.delete('/delete-category/:id', deleteCategory)

export default router;