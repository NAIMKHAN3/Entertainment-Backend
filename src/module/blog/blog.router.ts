import { Router } from "express";
import { verifyBlog, verifyBlogUpdate } from "./blog.validation";
import { createBlog, deleteBlog, getBlog, getBlogById, updateBlog } from "./blog.controller";

const router = Router();
router.post('/create-blog', verifyBlog, createBlog)
router.put('/update-blog/:id', verifyBlogUpdate, updateBlog)
router.get('/get-blog',  getBlog)
router.get('/get-blog-by-id/:id',  getBlogById)
router.delete('/delete-blog/:id',  deleteBlog)

export default router;