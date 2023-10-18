import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { getProfile, updateProfile } from "./user.controller";
import { verifyProfileUpdate } from "./user.validation";

const router = Router();

router.get('/get-profile', verifyJwt, getProfile)
router.get('/get-profile-by-id/:id', verifyJwt, getProfile)
router.put('/update-profile/:id',verifyProfileUpdate, verifyJwt, updateProfile)

export default router;