import Recruiter from "../../model/RecruiterModel.js";
import generateToken from "../../../Utils/generateToken.js";
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import Job from '../../model/JobModel.js';
import Category from "../../model/CategoryModel.js";
import Application from '../../model/ApplicationModel.js';



const registerRecruiter = async (req, res) => {
    const { recruiterName, recruiterEmail, recruiterPassword } = req.body;
    if (!recruiterName || !recruiterEmail || !recruiterPassword) {
        return res.status(400).json({ message: 'All fields are required.' });
      }
    try {
        const recruiterExists = await Recruiter.findOne({recruiterEmail});

        if (recruiterExists) {
            return res.status(400).json({ message: "Recruiter already exists" });
        }
        const recruiter = await Recruiter.create({
            recruiterName,
            recruiterEmail,
            recruiterPassword
        });
        if (recruiter) {
            res.status(201).json({
                id: recruiter._id,
                recruiterName: recruiter.recruiterName,
                recruiterEmail: recruiter.recruiterEmail,
                message: "Recruiter registered successfully"
            });
        } else {
            res.status(400).json({ message: "Invalid Recruiter data" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const loginRecruiter= async (req, res) => {
    try {
      const { recruiterEmail, recruiterPassword } = req.body;      
      const recruiter = await Recruiter.findOne({ recruiterEmail });
  
      if (!recruiter) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
      if (recruiter.status === 'blocked') {
        return res.status(403).json({ error: "Your account has been blocked." });
      }
      if (await recruiter.matchPassword(recruiterPassword)) {
        const recruiterData = {
            recruiterName: recruiter.recruiterName,
            recruiterEmail: recruiter.recruiterEmail,
            id: recruiter.id,
        };
        const token = generateToken(recruiter.id);
        return res.json({
            recruiterData,
          token,
          message: "Login successful",
        });
      } else {
        return res.status(401).json({ error: "Invalid email or password" });
      }
    } catch (error) {
      console.error(error);  
    return res.status(500).json({ error: "An error occurred. Please try again later." });
    }
  };


  // Google Register Recruiter
const googleRegisterRecruiter = async (req, res) => {
  try {
    const token = req.body.credential;
    const decodedData = jwt.decode(token);
    if (!decodedData) {
      return res.status(400).json({ error: "Invalid token" });
    }

    const { name, email, picture, jti } = decodedData;

    let recruiter = await Recruiter.findOne({ recruiterEmail: email });
    if (recruiter) {
      return res.status(400).json({ error: "Recruiter already exists" });
    }

    recruiter = new Recruiter({
      recruiterName: name,
      recruiterEmail: email,
      photo: picture,
      recruiterPassword: jti, // Consider replacing jti with a random password or handle auth differently
    });

    await recruiter.save();
    res.status(200).json({ message: "Recruiter registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

  // Google Login Recruiter
const googleLoginRecruiter = async (req, res) => {
  try {
    const decodedData = jwt.decode(req.body.credential);

    if (!decodedData) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const { email } = decodedData;

    const recruiter = await Recruiter.findOne({ recruiterEmail: email });

    if (recruiter) {
      const token = generateToken(recruiter._id);
      const recruiterData = {
        recruiterName: recruiter.recruiterName,
        recruiterEmail: recruiter.recruiterEmail,
        id: recruiter._id,
        phone: recruiter.phone || "",
        photo: recruiter.photo || "",
      };

      return res.json({
        recruiterData,
        token,
        message: "Login successful",
      });
    } else {
      return res.status(401).json({ error: "No recruiter found with this email" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


//sendPasswordResetEmail

const sendPasswordResetEmailRecruiter = async (req,res) => {
  try {
     let email = req.body.recruiterEmail;   
     const recruiter = await Recruiter.findOne({ recruiterEmail:email });
     if (!recruiter) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = generateToken(recruiter.id);  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shijiaa.04@gmail.com", 
        pass:"olsl ygyu rldk zffy", 
      }     
    }); 
      const mailOptions = {
      from:"shijiaa.04@gmail.com",
      to: email,
      subject: "Reset Your Password",
      html: `
        <p>Hello,</p>
        <p>Click the link below to reset your password:</p>
        <a href="http://localhost:4000/reset_password-recruiter/${recruiter.id}/${token}">Reset Password</a>
        <p>If you did not request this, please ignore this email.</p>
      `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      return res.status(200).json({ Status: "Success", info: info.response });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error ", error: error.message });
  }
};

//reset password

const resetPasswordRecruiter = async (req, res) => {
  try {
    const { id, token } = req.params;
   
    const { recruiterPassword } = req.body;
    if (!recruiterPassword) {
      return res.status(400).json({ message: "Password is required" });
    }
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

     if (decoded) {
      const hashedPassword = await bcrypt.hash(recruiterPassword, 10);
      const user = await Recruiter.findByIdAndUpdate(id, { password: hashedPassword }, { new: true });

      if (user) {
        return res.status(200).json({ message: "Password reset successfully" });
      } else {
        return res.status(400).json({ message: "User not found" });
      }
    } else {
      return res.status(400).json({ message: "Error with the token" });
    }
  } catch (error) {
    console.error("Error during password reset:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

//to get student profile

const getRecruiterProfile = async (req, res) => {
  try {
    const recruiter =   req.user    
    const recruiterData = await Recruiter.findOne({ _id: recruiter._id});   
    if (!recruiterData ) {
      return res.status(404).json({ message: "Recruiter  not found" });
    }
    res.status(200).json({ recruiterData });
  } catch (error) {
    console.error("Error during password reset:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
    }
};

//to get data in the editprofile page
const getRecruiterProfileById=async(req,res)=>{
  const recruiter=   req.user   
  try{  
    const recruiterDetails = await Recruiter.findOne({_id:recruiter._id})    
    if (recruiterDetails) {
      res.status(200).json({
        recruiterDetails,
        message: "Recruiter found successfully",
      });
    } else {
      return res.status(404).json({
        message: "Recruiter not found",
      });
    }
  } catch (error) {
    console.error("Error during password reset:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
    }
  }

const updateRecruiterProfile= async (req, res) => {
    try {
      // Get the user from middleware
      const user= req.user; 
      console.log(user, "Authenticated user from middleware");
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized: User not authenticated" });
      }
      // Extract fields from the request body
      const { recruiterName, recruiterEmail, phone, photo } = req.body;
  
      // Find the student in the database by ID
      const recruiter = await Recruiter.findById(user._id);
      console.log(recruiter, "Recruiter fetched from the database");
  
      if (!recruiter) {
        return res.status(404).json({ error: "Recruiter not found" });
      }
  
      // Update the student's fields
      recruiter.recruiterName = recruiterName || recruiter.recruiterName;
      recruiter.recruiterEmail = recruiterEmail || recruiter.recruiterEmail;
      recruiter.phone = phone || recruiter.phone;
      recruiter.photo = photo || recruiter.photo;
  
      // Save the updated student data
      const updatedRecruiter = await recruiter.save();
  
      // Prepare user data to return
      const recruiterData = {
        recruiterName: updatedRecruiter.recruiterName,
        recruiterEmail: updatedRecruiter.recruiterEmail,
        id: updatedRecruiter._id,
        phone: updatedRecruiter.phone,
        photo: updatedRecruiter.photo,
      };
  
      console.log(updatedRecruiter, "Updated Recruiter data");
  
      // Return the updated data to the client
      return res.status(200).json({ recruiterData, message: "Profile updated successfully" });
  
    } catch (error) {
      console.error("Error updating profile:", error);
      return res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  
const recruiterChangePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
   
    const userId = req.user.id; // Assume `isLogin` middleware adds user info to `req.user`
  
    // Validate input
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Find the user by ID
    const recruiter = await Recruiter.findById(userId);
    console.log(recruiter,"mxbcdbc")
    if (!recruiter) {
      return res.status(404).json({ error: 'recruiter not found.' });
    }

    // Verify the old password
    const isMatch = await bcrypt.compare(oldPassword, recruiter.recruiterPassword);
    if (!isMatch) {
      return res.status(400).json({ error: 'Incorrect old password.' });
    }

    // Hash the new password and update
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await Recruiter.findByIdAndUpdate(userId, { recruiterPassword: hashedPassword });

    // Generate a new token
    const recruiterToken = jwt.sign({ id: recruiter._id }, process.env.JWT_SECRET, { expiresIn: '1 day' });

    // Send the updated user data (excluding sensitive fields) and token
    const updatedRecruiter = {
      id: recruiter._id,
      recruiterName: recruiter.recruiterName,
      recruiterEmail: recruiter.recruiterEmail,
    };

    return res.status(200).json({
      message: 'Password updated successfully.',
      recruiter: updatedRecruiter,
      recruiterToken,
    });
  } catch (error) {
    console.error('Error in change password:', error);
    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

const addJobPost = async (req, res) => {
  try {   
    const recruiterId = req.user && req.user._id; 
    const {
      category,jobTitle,companyDescription,companyName,jobLocation,jobLocationType,
      salary,} = req.body;

    if (!jobTitle || !companyName || !jobLocationType || !category) {
      return res.status(400).json({
        error: "Job title, company name, job location type, and category are required.",
      });
    }
    if (
      !jobLocation ||
      !jobLocation.street ||
      !jobLocation.city ||
      !jobLocation.state ||
      !jobLocation.pincode
    ) {
      return res.status(400).json({
        error: "Complete job location details are required (street, city, state, pincode).",
      });
    }

    if (!recruiterId) {
      return res.status(401).json({
        error: "Unauthorized. Recruiter ID is missing.",
      });
    }
    const newJob = new Job({
      jobTitle,
      companyDescription: companyDescription || "No description provided", // Default description
      companyName,
      jobLocation,
      jobLocationType,
      salary: salary || "Not specified", // Default value if salary is not provided
      category,
      recruiterId, // Retrieved from req.user
    });
    await newJob.save();
    res.status(201).json({
      message: "Job posted successfully!",
      job: newJob,
    });
  } catch (error) {
    console.error("Error posting job:", error);
    res.status(500).json({
      error: "Failed to post job.",
      details: error.message,
    });
  }
};

const viewAllJobs = async (req, res) => {
  try {
    const recruiterId = req.user && req.user._id; 
    const jobDetails = await Job.find({ recruiterId: recruiterId }).populate('category', 'title').exec();
    if (!jobDetails.length) {
      return res.status(404).json({
        error: "No jobs found for this recruiter.",
      });
    }
    return res.status(200).json({
      jobDetails,
      message: "Jobs retrieved successfully.",
    });
  } catch (error) {
    console.error("Error retrieving jobs:", error);
    res.status(500).json({
      error: "Failed to retrieve jobs.",
      details: error.message,
    });
  }
};

const editJob = async (req, res) => {
  try {
    const jobId = req.params.id;  
   const jobDetails = await Job.findById(jobId).populate('category', 'title').exec();
   
    if (jobDetails) {
      return res.status(200).json({
        jobDetails,
        message: "Job details found successfully",
      });
    } else {
      return res.status(404).json({
        message: "Job not found",
      });
    }
  } catch (error) {
    console.error("Error retrieving job:", error);
    res.status(500).json({
      error: "Failed to retrieve job.",
      details: error.message,
    });
  }
};
const updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const updatedJobData = req.body;

    // Update the job in the database
    const job = await Job.findByIdAndUpdate(
      jobId,
      { $set: updatedJobData },
      { new: true }
    );

    if (job) {
      res.status(200).json({
        job, 
        message: "Job Updated Successfully",
      });
    } else {
      res.status(404).json({ message: "Job not found" });
    }
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({
      error: "Failed to update job.",
      details: error.message,
    });
  }
};

const deleteJob=async(req,res)=>{
  const { id } = req.params; 
    try {
    const deletedJob = await Job.findByIdAndDelete(id);
    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully", deletedJob });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ message: "An error occurred while deleting the job", error });
  }
};
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

const getApplicantsList = async (req, res) => {
  const recruiterId = req.user && req.user._id;
  // Check if recruiter is authenticated
  if (!recruiterId) {
      return res.status(401).json({
          success: false,
          message: 'Unauthorized access. Please log in.',
      });
  }
  try {
      // Fetch jobs posted by the recruiter
      const jobs = await Job.find({ recruiterId });
      if (!jobs || jobs.length === 0) {
          return res.status(404).json({
              success: false,
              message: 'No jobs found for this recruiter.',
          });
      }
      // Extract job IDs
      const jobIds = jobs.map((job) => job._id);
      // Fetch applications for the recruiter's jobs
      const applications = await Application.find({ jobId: { $in: jobIds } })
          .populate('userId', 'name email') // Populate applicant's details
          .populate('jobId', 'jobTitle'); // Populate job details

      // Handle empty applications
      if (!applications || applications.length === 0) {
          return res.status(404).json({
              success: false,
              message: 'No applicants found for your jobs.',
          });
      }
      // Respond with applications
      return res.status(200).json({
          success: true,
          applications,
      });
  } catch (error) {
      console.error('Error fetching applicants:', error);
      return res.status(500).json({
          success: false,
          message: 'An error occurred while fetching applicants.',
      });
  }
};


const updateApplicationStatus = async (req, res) => {
    const applicationId = req.params.id; 
    const { status } = req.body; 
    const validStatuses = ['Pending', 'Approved', 'Rejected'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid status. Valid statuses are: Pending, Approved, Rejected.',
        });
    }
    try {
        // Find application by ID
        const application = await Application.findById(applicationId);
        if (!application) {
            return res.status(404).json({
                success: false,
                message: 'Application not found.',
            });
        }
        // If the status is already the same, no need to update
        if (application.status === status) {
            return res.status(200).json({
                success: true,
                message: `Application status is already ${status}.`,
            });
        }

        // Update application status
        application.status = status;
        await application.save();

        // Respond with success message
        return res.status(200).json({
            success: true,
            message: 'Application status updated successfully.',
        });
    } catch (error) {
        console.error('Error updating application status:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while updating the application status.',
        });
    }
};



export {registerRecruiter,loginRecruiter,googleRegisterRecruiter,googleLoginRecruiter,
  sendPasswordResetEmailRecruiter,resetPasswordRecruiter,getRecruiterProfile,getRecruiterProfileById,
  updateRecruiterProfile,recruiterChangePassword,addJobPost,viewAllJobs,editJob,updateJob,deleteJob,
  getAllCategory,getApplicantsList,updateApplicationStatus}
