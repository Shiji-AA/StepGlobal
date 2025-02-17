
import jwt from 'jsonwebtoken';
import generateToken from '../../../Utils/generateToken.js'
import mongoose from "mongoose";
import User from '../../model/UserModel.js';
import Recruiter from '../../model/RecruiterModel.js';
import Category from '../../model/CategoryModel.js';
import Job from '../../model/JobModel.js';
import bcrypt from 'bcrypt';


const adminLogin = async (req,res) => {      
    try {
        const adminEmail = "admin@gmail.com";
        
        const id = new mongoose.Types.ObjectId("67347106a2bddffaf51dbd7d")
        const { email, password } = req.body;  
               
        if (adminEmail === email && password) {

            const token = generateToken(id);
            return res.status(200).json({
                id,
                adminEmail,
                token,                
                message :"Logged successfully"             
            });
        } else {
            return res.status(401).json({ message: "Invalid Email or password" });
        }
    } catch (error) {
        return res.status(500).json({ message: "An error occurred. Please try again later." });
    }
};


//get All Students

const getAllstudents = async (req, res) => {
    try {
      const studentDetails = await User.find({__v: { $ne: 1 }}).exec();   
  
      if (studentDetails.length > 0) {     
        res.status(200).json({
            studentDetails,
          message: " Students found",
        });
      } else {
        return res.status(404).json({
          message: "No students found",
        });
      }
    } catch (error) {
        return res.status(500).json({ message: "An error occurred. Please try again later." });
    }
  };

  const unlistStudent = async (req, res) => {
    try {
        const { id } = req.params;      
        const student = await User.findById(id);
  
        if (!student) {
            console.log("Student not found");
            return res.status(404).json({ message: "Student not found" });
        }
  
        student.isBlocked = true;
        await student.save();
  
        return res.status(200).json({ message: "User has been successfully unlisted" });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred. Please try again later." });
    }
  }
    
    //unblock the student
    const relistStudent = async (req, res) => {
      try {
          const { id } = req.params;
          //console.log(id,"student id to unblock")
          const student = await User.findById(id);
  
          if (!student) {
              console.log("Student not found");
              return res.status(404).json({ message: "User not found" });
          }
  
          student.isBlocked = false; // Setting isBlocked to false to relist the student
          await student.save();
  
          return res.status(200).json({ message: "User has been successfully relisted" });
      } catch (error) {
        return res.status(500).json({ message: "An error occurred. Please try again later." });
      } }

  const searchStudent= async (req, res) => {
    try {          
        const searchCriteria = req.query.searchCriteria;       
          
      
        if (!searchCriteria || typeof searchCriteria !== 'string') {
            return res.status(400).send('Invalid search criteria');
        }  
        const studentDetails = await User.find({
            $and: [
                {name: { $regex: `^${searchCriteria}`, $options: 'i' } }, // Starts with 'a' search
                {name: { $not: { $eq: 'Admin' } } } // Exclude records where name is 'admin' (case-insensitive)
            ]
        });  
        res.status(200).json(studentDetails); 
    } catch (error) {
      return res.status(500).json({ message: "An error occurred. Please try again later." });  
    }
}

//get All recruiters

const getAllrecruiters = async (req, res) => {
  try {
    const recruiterDetails = await Recruiter.find().exec();   

    if (recruiterDetails.length > 0) {     
      res.status(200).json({
        recruiterDetails,
        message: " Recruiter found",
      });
    } else {
      return res.status(404).json({
        message: "No recruiters found",
      });
    }
  } catch (error) {
      return res.status(500).json({ message: "An error occurred. Please try again later." });
  }
};

const unlistrecruiter = async (req, res) => {
  try {
      const { id } = req.params;         
      const recruiter = await Recruiter.findById(id);
      if (!recruiter) {
          console.log("Recruiter not found");
          return res.status(404).json({ message: "Recruiter not found" });
      }
      recruiter.isBlocked = true;
      await recruiter.save();
      return res.status(200).json({ message: "Recruiter has been successfully unlisted" });
  } catch (error) {
      return res.status(500).json({ message: "An error occurred. Please try again later." });
  }
}
  //unblock the recruiter
    const relistRecruiter = async (req, res) => {
      try {
          const { id } = req.params;
          const recruiter = await Recruiter.findById(id);  
          if (!recruiter) {
              console.log(" Recruiter not found");
              return res.status(404).json({ message: "Recruiter not found" });
          }
  
          recruiter.isBlocked = false; 
          await recruiter.save();
  
          return res.status(200).json({ message: "Recruiter has been successfully relisted" });
      } catch (error) {
        return res.status(500).json({ message: "An error occurred. Please try again later." });
      } }

      const searchRecruiter= async (req, res) => {
        try {          
            const searchCriteria = req.query.searchCriteria;                 
            if (!searchCriteria || typeof searchCriteria !== 'string') {
                return res.status(400).send('Invalid search criteria');
            }  
            const recruiterDetails = await Recruiter.find({
                $and: [
                    {recruiterName: { $regex: `^${searchCriteria}`, $options: 'i' } }                   
                ]
            });  
          res.status(200).json(recruiterDetails); 
        } catch (error) {
          return res.status(500).json({ message: "An error occurred. Please try again later." });  
        }
    }


    const addCategory= async(req,res)=>{
      try{
          const {title,description,photo} = req.body;         
      const categoryExist= await Category.findOne({
          title: { $regex: new RegExp(title, 'i') },
        });
        if (!title || !description || !photo) {
          return res.status(400).json({ error: "All fields are required" });
      }
        if (categoryExist) {
          console.log('Category already exists');
          return res.status(400).json({ error: 'Category already exists' });
        }        
        const newCategory = await Category.create({
          title,
          description,
          photo
        });
    
        if (newCategory) {
            console.log(title, 'new Title');
            res.status(201).json({
              title,
              description,
              photo,
              message :"Category added successfully"
            });
          } else {
            res.status(400).json({ error: 'Invalid category data' });
          }
            }
      catch(error){
        return res.status(500).json({ message: "An error occurred. Please try again later." });  
      }}

      const getAllCategory = async (req, res) => {
        try {
          const categoryDetails = await Category.find().exec();
          if (categoryDetails) {      
           res.status(200).json({
              categoryDetails,
              message:"categoryDetails"
            });
          } else {
            return res.status(400).json({
              message: "no users in this table",
            });
          }
        } catch (error) {
          return res.status(500).json({ message: "An error occurred. Please try again later." });  
        }
      };
  
      //to get category details as per id
const getCategoryById =async (req,res)=>{
  const categoryId=req.params.id;
  try{  
    const categoryDetails = await Category.findById(categoryId).exec();
    if (categoryDetails) {
      res.status(200).json({
        categoryDetails,
        message: "Category found successfully",
      });
    } else {
      return res.status(404).json({
        message: "Category not found",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "An error occurred. Please try again later." });    
  }
  }

  
  const editCategory =async(req,res)=>{
    try{
      const {id}= req.params;      
      const {title,description} =req.body;
      const category = await Category.findById(id);
      if(!category){
        return res.status(404).json({error:"Invalid category"})
      }
  
      category.title =title || category.title;
      category.description= description || category.description;
      const updateCategory = await category.save();  
      if(updateCategory){
        return res.status(200).json(
          {message:"Category updated successfully"}
          )
      }else{
        return res.status(404).json({error:"Failed to update category"})
      }
    }
    catch(error){
      return res.status(500).json({ message: "An error occurred. Please try again later." });  
      }
  }
  const deleteCategory = async(req,res)=>{
    try{
      const {id}=req.params;
      const category = await Category.findById(id);
      if(!category){
        return res.status(400).json({error:"Category not found"})
      }
   await Category.findByIdAndDelete(id)
   res.status(200).json({message:"category deleted successfully"})
      }  
    catch(error){    
      return res.status(500).json({ message: "An error occurred. Please try again later." });  
    }  
  }


  const getAdminJobList = async(req,res)=>{
    try{
      const jobDetails = await Job.find().populate('category', 'title').exec();
      //console.log(jobDetails,"jobDetails")
            if(jobDetails){
          res.status(200).json({
          jobDetails,message:"JobDetails"
        })
      }else{
        return res.status(400).json({
          error:"no job available"
        })
      }
    }
    catch(error){
      return res.status(500).json({ message: "An error occurred. Please try again later." });  
    }
  }
 //For admin approval of course
 const toggleJobStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);  
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    } 
    job.isApproved = !job.isApproved;
    await job.save();

    return res.status(200).json({ message: 'Job status toggled successfully', job });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred. Please try again later." }); 
  }
};

const adminChangePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user.id; // Assume `isLogin` middleware adds user info to `req.user`
console.log(userId,"userId admin")
    // Validate input
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Incorrect old password.' });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(userId, { password: hashedPassword });
    const adminToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const updatedUser = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    return res.status(200).json({
      message: 'Password updated successfully.',
      user: updatedUser,
      adminToken,
    });
  } catch (error) {
    console.error('Error in change password:', error);
    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};


      
export {adminLogin,getAllstudents,unlistStudent,relistStudent,searchStudent,getAllrecruiters,
  unlistrecruiter,relistRecruiter,searchRecruiter,addCategory,getAllCategory,getCategoryById,
  editCategory,deleteCategory,getAdminJobList,toggleJobStatus,adminChangePassword}
