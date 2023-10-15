import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyUserReg } from "../auth/auth.validation";
import { createAdmin, getAllAdmin, getAllSuperAdmin, getAllUser } from "./controller";
import { verifySuperAdmin } from "../../middleware/verifySuperAdmin";

const router = Router();

router.post('/create-admin', verifyJwt, verifySuperAdmin, verifyUserReg, createAdmin)
router.get('/get-all-user',  getAllUser)
router.get('/get-all-admin',  getAllAdmin)
router.get('/get-all-super-admin',  getAllSuperAdmin)


export default router;