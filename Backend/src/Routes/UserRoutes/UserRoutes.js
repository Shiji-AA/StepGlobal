import express from 'express';

const router= express.Router()
import {googleLogin, googleRegister, loginUser, registerUser, resetPassword,sendPasswordResetEmail} from '../../Controller/UserController/UserController.js'

router.post('/register',registerUser)
router.post('/login',loginUser);
router.post('/google/register',googleRegister);
router.post("/google/login", googleLogin);
router.post("/forgotpassword", sendPasswordResetEmail);
router.post("/reset-password/:id/:token", resetPassword);

export default router;