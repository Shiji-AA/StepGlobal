import Recruiter from "../../model/RecruiterModel.js";
import generateToken from "../../../Utils/generateToken.js";
import jwt from 'jsonwebtoken'


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
          message: "Success",
        });
      } else {
        return res.status(400).json({ error: "Invalid email or password" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred. Please try again later." });
    }
  };
export {registerRecruiter,loginRecruiter}