
import jwt from 'jsonwebtoken';
import generateToken from '../../../Utils/generateToken.js'
import mongoose from "mongoose";
import User from '../../model/UserModel.js';
import Recruiter from '../../model/RecruiterModel.js'

const adminLogin = async (req,res) => {      
    try {
        const adminEmail = "admin@gmail.com";
        const adminPassword = "Admin@123";
        const id = new mongoose.Types.ObjectId("67347106a2bddffaf51dbd7d")
        const { email, password } = req.body;  
               
        if (adminEmail === email && adminPassword === password) {

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
    
      
export {adminLogin,getAllstudents,unlistStudent,relistStudent,searchStudent,getAllrecruiters,
  unlistrecruiter,relistRecruiter,searchRecruiter}
