import express from 'express';
import { isLogin } from '../../../Middleware/userAuth.js';
const recruiterRouter= express.Router()


import { getRecruiterProfile, googleLoginRecruiter, googleRegisterRecruiter, loginRecruiter, 
    registerRecruiter, resetPasswordRecruiter, sendPasswordResetEmailRecruiter,getRecruiterProfileById,
     updateRecruiterProfile, recruiterChangePassword, addJobPost, 
     viewAllJobs,
     editJob,
     updateJob,
     deleteJob,
     getAllCategory,
     getApplicantsList,
     updateApplicationStatus,
     } from '../../Controller/RecruiterController/RecruiterController.js'


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
recruiterRouter.post("/addJobPost", isLogin,addJobPost);
recruiterRouter.get("/viewjobs", isLogin, viewAllJobs);
recruiterRouter.get("/editjob/:id", editJob);
recruiterRouter.put("/updatejob/:id", updateJob);
recruiterRouter.delete("/deletejob/:id", deleteJob);
recruiterRouter.get("/categories", isLogin, getAllCategory);
recruiterRouter.get("/applicantsList", isLogin, getApplicantsList);
recruiterRouter.patch('/updateApplicationStatus/:id',isLogin,updateApplicationStatus);



export default recruiterRouter;