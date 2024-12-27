import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required'],
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: [true, 'Job ID is required'],
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending',
    },
});

// Add a unique compound index
applicationSchema.index({ userId: 1, jobId: 1 }, { unique: true });

const Application = mongoose.model('Application', applicationSchema);

export default Application;
