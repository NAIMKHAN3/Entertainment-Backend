import { Router } from "express";
import { verifyFaq, verifyFaqUpdate } from "./faq.validation";
import { createFaq, deleteFaq, getFaq, updateFaq } from "./faq.controller";

const router = Router();

router.post('/create-faq', verifyFaq, createFaq)
router.put('/update-faq/:id', verifyFaqUpdate, updateFaq)
router.get('/get-faq', getFaq)
router.delete('/delete-faq/:id', deleteFaq)

export default router;