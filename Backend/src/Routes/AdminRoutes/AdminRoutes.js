import express from "express";
const adminRouter = express.Router();
//import { isLogin } from "../../../Middleware/userAuth.js";


import { adminLogin, getAllrecruiters, getAllstudents, relistRecruiter, relistStudent, searchRecruiter,
     searchStudent, unlistrecruiter, unlistStudent } from "../../Controller/AdminController/AdminController.js";


adminRouter.post("/admin",adminLogin);
adminRouter.get("/getallstudents",  getAllstudents);
adminRouter.post("/unliststudent/:id", unlistStudent);
adminRouter.post("/reliststudent/:id",  relistStudent);
adminRouter.get("/searchstudent", searchStudent);


adminRouter.get("/getallrecruiters", getAllrecruiters);
adminRouter.post("/unlistrecruiter/:id", unlistrecruiter);
adminRouter.post("/relistrecruiter/:id",  relistRecruiter);
adminRouter.get("/searchrecruiter",  searchRecruiter);

export default adminRouter;