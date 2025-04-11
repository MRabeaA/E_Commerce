import mongoose, { model, Schema } from "mongoose";

const subCategorySchema = new Schema(
  {
    name: {
      type: String,
      unique: [true, "name is invalid"],
      required: true,
      minLength: [2, "too short subCategory name"],
    },
    slug: {
      type: String,
      unique : true ,
      lowercase: true,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
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

const SubCategory = model("SubCategory", subCategorySchema);

export default SubCategory;
