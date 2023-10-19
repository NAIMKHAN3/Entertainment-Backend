import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { getProfile, getProfileById, updateProfile } from "./user.controller";
import { verifyProfileUpdate } from "./user.validation";

const router = Router();

router.get('/get-profile', verifyJwt, getProfile)
router.get('/get-profile-by-id/:id', verifyJwt, getProfileById)
router.put('/update-profile/:id',verifyProfileUpdate, verifyJwt, updateProfile)

export default router;