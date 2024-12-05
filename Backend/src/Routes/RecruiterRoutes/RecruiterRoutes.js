import express from 'express';
import { isLogin } from '../../../Middleware/userAuth.js';
const recruiterRouter= express.Router()

import { getRecruiterProfile, googleLoginRecruiter, googleRegisterRecruiter, loginRecruiter, registerRecruiter, resetPasswordRecruiter, sendPasswordResetEmailRecruiter,getRecruiterProfileById, updateRecruiterProfile, recruiterChangePassword } from '../../Controller/RecruiterController/RecruiterController.js'


recruiterRouter.post("/recruiterlogin",loginRecruiter );
recruiterRouter.post("/recruiterregister",registerRecruiter);
recruiterRouter.post("/google/recruiterregister",googleRegisterRecruiter);
recruiterRouter.post("/google/recruiterlogin",googleLoginRecruiter);
recruiterRouter.post("/forgotpasswordrecruiter",sendPasswordResetEmailRecruiter);
recruiterRouter.post("/reset_password-recruiter/:id/:token",resetPasswordRecruiter);
recruiterRouter.get("/recruiterprofile",isLogin, getRecruiterProfile);
recruiterRouter.get("/recruitereditprofile", isLogin, getRecruiterProfileById);
recruiterRouter.put("/updaterecruiterprofile",isLogin,updateRecruiterProfile);
recruiterRouter.patch('/recruiterchangepassword',isLogin,recruiterChangePassword);



export default recruiterRouter;