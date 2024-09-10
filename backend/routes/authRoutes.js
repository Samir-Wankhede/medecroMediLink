import express from "express";
import { handleLogout, handleProfessionalSignin, handleProfessionalSignup, handleUserSignin, handleUserSignup } from "../controllers/authController.js";

const router = express.Router();

router.post('/signup', handleUserSignup);
router.post('/signin', handleUserSignin);
router.post('/professional-signup', handleProfessionalSignup);
router.post('/professional-signin', handleProfessionalSignin);
router.get('/logout', handleLogout);

export default router;