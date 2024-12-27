import express from 'express';

const router= express.Router()
import {applyForJob, getAppliedJobsList, getProfileById, getSavedJobsList, getStudentProfile, getUserJobList, googleLogin,
     googleRegister, loginUser, registerUser, resetPassword,saveJob,sendPasswordResetEmail, 
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
router.get("/userjoblist", getUserJobList);

router.post("/applyJob/:id", isLogin,applyForJob );
router.get("/appliedJobs",isLogin, getAppliedJobsList);
router.post("/saveJob/:id", isLogin,saveJob);
router.get("/savedJobsList",isLogin, getSavedJobsList);


export default router;