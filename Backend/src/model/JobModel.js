import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    category: {
      type:mongoose.Schema.Types.ObjectId,
      ref: "Category", 
      required: true  
    },
    companyName: { type: String, required: true },
    companyDescription: { type: String }, 
    jobTitle: { type: String, required: true },
    jobLocationType: { type: String, required: true },
    jobLocation: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true }, 
      country: { type: String }
    },
    isApproved: { type: Boolean} ,
    salary: { type: String }, 
    recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: "Recruiter", required: true },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
