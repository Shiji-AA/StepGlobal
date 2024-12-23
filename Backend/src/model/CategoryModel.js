import mongoose from 'mongoose';
const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3, 
        maxlength: 50, 
    },
    description: {
        type: String,
        required: true,
        minlength: 10, 
        maxlength: 500,
    },

},{timestamps:true}
  
)
const Category = mongoose.model("Category", categorySchema);

export default Category;


