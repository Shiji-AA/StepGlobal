import Recruiter from "../../model/RecruiterModel.js";
import generateToken from "../../../Utils/generateToken.js";
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';



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

 

export {registerRecruiter,loginRecruiter,googleRegisterRecruiter,googleLoginRecruiter,sendPasswordResetEmailRecruiter,resetPasswordRecruiter}
