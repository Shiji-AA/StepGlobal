import express from 'express';
const recruiterRouter= express.Router()

import { googleLoginRecruiter, googleRegisterRecruiter, loginRecruiter, registerRecruiter, resetPasswordRecruiter, sendPasswordResetEmailRecruiter } from '../../Controller/RecruiterController/RecruiterController.js'


recruiterRouter.post("/recruiterlogin",loginRecruiter );
recruiterRouter.post("/recruiterregister",registerRecruiter);
recruiterRouter.post("/google/recruiterregister",googleRegisterRecruiter);
recruiterRouter.post("/google/recruiterlogin",googleLoginRecruiter);
recruiterRouter.post("/forgotpasswordrecruiter",sendPasswordResetEmailRecruiter);
recruiterRouter.post("/reset_password-recruiter/:id/:token",resetPasswordRecruiter);


export default recruiterRouter;