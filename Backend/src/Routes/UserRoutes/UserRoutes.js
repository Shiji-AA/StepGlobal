import express from 'express';

const router= express.Router()
import {getProfileById, getStudentProfile, googleLogin,
     googleRegister, loginUser, registerUser, resetPassword,sendPasswordResetEmail, 
     studentChangePassword, updateProfile} from '../../Controller/UserController/UserController.js'
import { isLogin } from '../../../Middleware/userAuth.js';

router.post('/register',registerUser)
router.post('/login',loginUser);
router.post('/google/register',googleRegister);
router.post("/google/login", googleLogin);
router.post("/forgotpassword", sendPasswordResetEmail);
router.post("/reset-password/:id/:token", resetPassword);
router.get("/userprofile",isLogin, getStudentProfile);
//StudentEditProfile
router.get("/editprofile", isLogin, getProfileById);
router.put("/updateprofile", isLogin, updateProfile);
router.patch('/changePassword',isLogin,studentChangePassword)



export default router;