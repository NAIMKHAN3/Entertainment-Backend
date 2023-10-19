import { Router } from "express";
import { verifyFaq, verifyFaqUpdate } from "./faq.validation";
import { createFaq, deleteFaq, getFaq, getFaqById, updateFaq } from "./faq.controller";

const router = Router();

router.post('/create-faq', verifyFaq, createFaq)
router.put('/update-faq/:id', verifyFaqUpdate, updateFaq)
router.get('/get-faq', getFaq)
router.delete('/delete-faq/:id', deleteFaq)
router.get('/get-faq-by-id/:id', getFaqById)

export default router;