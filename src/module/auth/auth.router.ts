import { Router } from "express";
import { verifyChangePassword, verifyUserLogin, verifyUserReg } from "./auth.validation";
import { changePassword, createUser, loginUser } from "./auth.controller";
import { verifyJwt } from "../../middleware/verifyJwt";

const router = Router();

router.post('/create-user', verifyUserReg, createUser)
router.post('/login-user', verifyUserLogin, loginUser)
router.post('/change-password', verifyJwt, verifyChangePassword, changePassword)

export default router;