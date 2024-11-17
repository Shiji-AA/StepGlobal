import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const recruiterSchema = new mongoose.Schema({
    recruiterName: {
        type: String,
        required: true,
        trim: true
    },
    recruiterEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    recruiterPassword: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String, 
        unique: false,          
    },
    photo:{
        type:String,
        default:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",
    },
    isBlocked:{
        type:Boolean,        
        default:false
    }

}, {
    timestamps: true
});


recruiterSchema.pre('save', async function (next) {
    if (!this.isModified('recruiterPassword')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.recruiterPassword = await bcrypt.hash(this.recruiterPassword, salt);
        next();
    } catch (error) {
        next(error);
    }
});


recruiterSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.recruiterPassword);
};

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

export default Recruiter;
