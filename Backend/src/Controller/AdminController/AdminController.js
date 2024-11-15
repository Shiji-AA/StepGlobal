
import jwt from 'jsonwebtoken';
import generateToken from '../../../Utils/generateToken.js'
import mongoose from "mongoose";

const adminLogin = async (req,res) => {      
    try {
        const adminEmail = "admin@gmail.com";
        const adminPassword = "Admin@123";
        const id = new mongoose.Types.ObjectId("67347106a2bddffaf51dbd7d")
        const { email, password } = req.body;  
        console.log(email, "admincontroller")          
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


export {adminLogin}