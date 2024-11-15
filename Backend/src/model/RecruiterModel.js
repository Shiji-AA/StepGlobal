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
