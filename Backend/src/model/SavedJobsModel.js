import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const savedJobSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  jobId: { type: Schema.Types.ObjectId, ref: 'Job', required: true }, // Reference to Job model
  savedAt: { type: Date, default: Date.now },
});

const SavedJob = mongoose.model('SavedJob', savedJobSchema);
export default SavedJob;


