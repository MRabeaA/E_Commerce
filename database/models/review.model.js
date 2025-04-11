import mongoose, { model, Schema } from "mongoose";

const reviewSchema = new Schema({
  comment: {
    type: String,
    required: true,
    minLength: 10,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rate: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: true,
  }
}, 
{
timestamps : true , 
versionKey : false

});

const  Review = model('Review',reviewSchema )

export default Review 

