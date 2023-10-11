import { Router } from "express";
import { verifyUserReg } from "./auth.validation";
import { createUser } from "./auth.controller";

const router = Router();

router.post('/create-user', verifyUserReg, createUser)

export default router;