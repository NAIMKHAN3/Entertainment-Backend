import { Router } from "express";
import fileUploadMiddleware from "../../middleware/fileUploadMiddleware";
import { fileUpload } from "./controller";

const router = Router();

router.post('/upload', fileUploadMiddleware,fileUpload)

export default router;