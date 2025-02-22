import express from "express";
const adminRouter = express.Router();
import { isLogin } from "../../../Middleware/userAuth.js";


import { addCategory, adminChangePassword, adminLogin, deleteCategory, editCategory, getAdminJobList, getAllCategory, getAllrecruiters, getAllstudents, getCategoryById, relistRecruiter, relistStudent, searchRecruiter,
     searchStudent, toggleJobStatus, unlistrecruiter, unlistStudent } from "../../Controller/AdminController/AdminController.js";


adminRouter.post("/admin",adminLogin);
adminRouter.get("/getallstudents",  getAllstudents);
adminRouter.post("/unliststudent/:id", unlistStudent);
adminRouter.post("/reliststudent/:id",  relistStudent);
adminRouter.get("/searchstudent", searchStudent);

adminRouter.get("/getallrecruiters", getAllrecruiters);
adminRouter.post("/unlistrecruiter/:id", unlistrecruiter);
adminRouter.post("/relistrecruiter/:id",  relistRecruiter);
adminRouter.get("/searchrecruiter",  searchRecruiter);

adminRouter.post("/addcategory", addCategory);
adminRouter.get("/getallcategory", getAllCategory);
adminRouter.get("/getallcategory1/:id", getCategoryById);
adminRouter.put("/editcategory/:id", editCategory);
adminRouter.delete("/deletecategory/:id", deleteCategory);

adminRouter.get("/adminjoblist", getAdminJobList);
adminRouter.post("/toggleJobStatus/:id", toggleJobStatus)
adminRouter.patch('/adminchangepassword',adminChangePassword);


export default adminRouter;