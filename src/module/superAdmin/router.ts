import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyUserReg } from "../auth/auth.validation";
import { createAdmin } from "./controller";
import { verifySuperAdmin } from "../../middleware/verifySuperAdmin";

const router = Router();

router.post('/create-admin', verifyJwt, verifySuperAdmin, verifyUserReg, createAdmin)

export default router;