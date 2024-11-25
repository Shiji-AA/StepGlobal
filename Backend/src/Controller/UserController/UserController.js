import dotenv from 'dotenv';
dotenv.config();
import User from '../../model/UserModel.js'
import generateToken from "../../../Utils/generateToken.js"
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';

console.log(process.env.EMAIL_USER,"CJHDZGCJDGCJDHGCJD")


const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
      }

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({
            name,
            email,
            password
        });

        if (user) {
            res.status(201).json({
                id: user._id,
                name: user.name,
                email: user.email,
                message: "User registered successfully"
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;      
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({error: "User does not exist."});
      }
      if (user.status === 'blocked') {
        return res.status(403).json({ error: "Your account has been blocked." }); 
      }
      if (await user.matchPassword(password)) {
        const userData = {
          name: user.name,
          email: user.email,
          id: user.id,
        };
        const token = generateToken(user.id);
        return res.json({
          userData,
          token,
          message: "Login successful",
        });
      } else {
        return res.status(401).json({error: "Incorrect-password."});
      }
    } catch (error) {
      return res
        .status(500)
        .json({error: "An error occurred. Please try again later." });
    }
  };

//googleREGISTER

const googleRegister = async (req, res) => {
  try {
    const token = req.body.credential;
    const decodedData = jwt.decode(token);
    if (!decodedData) {
      return res.status(400).json({ error: "Invalid token" });
    }
    const { name, email, picture, jti } = decodedData;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    user = new User({
      name,
      email,
      photo: picture,
      password: jti, // Consider not using jti as a password
    });
    await user.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// Google Login
const googleLogin = async (req, res) => {
  try {
      const decodedData = jwt.decode(req.body.credential);
      if (!decodedData) {
          return res.status(400).json({ error: "Invalid credentials" });
      }

      const { name, email, picture, jti } = decodedData;
      const user = await User.findOne({ email });

      if (user) {
          const token = generateToken(user._id);
          const userData = {
              name: user.name,
              email: user.email,
              id: user._id,
              phone: user.phone,
              photo: user.photo,
          };
          return res.json({
              userData,
              token,
              message: "Success",
          });
      } else {
          return res.status(401).json({ error: "Invalid Email and Password" });
      }
  } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
  }
};

//sendPasswordResetEmail

const sendPasswordResetEmail = async (req,res) => {
  try {
     let email = req.body.email;   
     const user = await User.findOne({ email });
     if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = generateToken(user._id);


    const transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: "shijihcl@gmail.com", //
        pass: "tsqb ondk qqqb zgia",
      },     
    });

      const mailOptions = {
      from:"shijihcl@gmail.com",
      to: email,
      subject: "Reset Your Password",
      html: `
        <p>Hello,</p>
        <p>Click the link below to reset your password:</p>
        <a href="http://localhost:4000/reset_password/${user._id}/${token}">Reset Password</a>
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
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//reset password

const resetPassword = async (req, res) => {
  try {
    const { id, token } = req.params;
   // Extract password from the body
    const { password } = req.body;

    // Check if the password is provided
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    // Verify the token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // If token is valid, proceed with password update
    if (decoded) {
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Find and update the user password
      const user = await User.findByIdAndUpdate(id, { password: hashedPassword }, { new: true });

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

const getStudentProfile = async (req, res) => {
  try {
    const user =   req.user    
    const userData = await User.findOne({ _id: user._id});   
    if (!userData) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ userData });
  } catch (error) {
    console.error("Error during password reset:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
    }
};


//to get data in the editprofile page
const getProfileById =async(req,res)=>{
  const user =   req.user   
  try{  
    const studentDetails = await User.findById(user._id).exec();  
    if (studentDetails) {
      res.status(200).json({
        studentDetails,
        message: "User found successfully",
      });
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.error("Error during password reset:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
    
  }
  }


  const updateProfile = async (req, res) => {
    try {
      // Get the user from middleware
      const user = req.user; 
      console.log(user, "Authenticated user from middleware");
  
      // Extract fields from the request body
      const { studentName, studentEmail, phone, photo } = req.body;
  
      // Find the student in the database by ID
      const student = await User.findById(user._id);
      console.log(student, "Student fetched from the database");
  
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
  
      // Update the student's fields
      student.name = studentName || student.name;
      student.email = studentEmail || student.email;
      student.phone = phone || student.phone;
      student.photo = photo || student.photo;
  
      // Save the updated student data
      const updatedStudent = await student.save();
  
      // Prepare user data to return
      const userData = {
        name: updatedStudent.name,
        email: updatedStudent.email,
        id: updatedStudent._id,
        phone: updatedStudent.phone,
        photo: updatedStudent.photo,
      };
  
      console.log(updatedStudent, "Updated student data");
  
      // Return the updated data to the client
      return res.status(200).json({ userData, message: "Profile updated successfully" });
  
    } catch (error) {
      console.error("Error updating profile:", error);
      return res.status(500).json({ message: "Server error", error: error.message });
    }
  };
 


const studentChangePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user.id; // Assume `isLogin` middleware adds user info to `req.user`

    // Validate input
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Verify the old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Incorrect old password.' });
    }

    // Hash the new password and update
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(userId, { password: hashedPassword });

    // Generate a new token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the updated user data (excluding sensitive fields) and token
    const updatedUser = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    return res.status(200).json({
      message: 'Password updated successfully.',
      user: updatedUser,
      token,
    });
  } catch (error) {
    console.error('Error in change password:', error);
    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};


   

  
export {registerUser,loginUser,googleRegister,googleLogin,
  sendPasswordResetEmail,resetPassword,getStudentProfile,
  getProfileById,updateProfile,studentChangePassword}