import mongoose, { model } from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: [true,"name is invalid"],
      trim: true,
      required: true,
      minLength: [2,"too short category name"],
    },
    slug: {
      type: String,
      unique : true,
      lowercase: true,
      required: true,
    },
    image: String,
     createdBy: {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

categorySchema.post('init' ,(category)=>{
  category.image = 'http://127.0.0.1:3000/categories/'+ category.image

})


const Category = model("Category", categorySchema);

export default Category;
