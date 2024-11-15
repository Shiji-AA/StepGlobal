import express from 'express';
const recruiterRouter= express.Router()

import { loginRecruiter, registerRecruiter } from '../../Controller/RecruiterController/RecruiterController.js'


recruiterRouter.post("/recruiterlogin",loginRecruiter );
recruiterRouter.post("/recruiterregister",registerRecruiter);

export default recruiterRouter;