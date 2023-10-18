import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyUserReg } from "../auth/auth.validation";
import { createAdmin, deleteUser, getAllAdmin, getAllSuperAdmin, getAllUser, userRoleUpdate } from "./controller";
import { verifySuperAdmin } from "../../middleware/verifySuperAdmin";
import { verifyRole } from "./validation";

const router = Router();

router.post('/create-admin', verifyJwt, verifySuperAdmin, verifyUserReg, createAdmin)
router.put('/role-update/:id', verifyJwt,  verifyRole, userRoleUpdate)
router.delete('/user-delete/:id', verifyJwt, deleteUser)
router.get('/get-all-user',  getAllUser)
router.get('/get-all-admin',  getAllAdmin)
router.get('/get-all-super-admin',  getAllSuperAdmin)


export default router;