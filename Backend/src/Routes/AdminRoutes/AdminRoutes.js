import express from "express";
const adminRouter = express.Router();


import { adminLogin } from "../../Controller/AdminController/AdminController.js";


adminRouter.post("/admin",adminLogin);



export default adminRouter;