import mongoose, { model, Schema } from "mongoose";

const brandSchema = new Schema(
  {
    name: {
      type: String,
      unique: [true, "name is invalid"],
      required: true,
      minLength: [2, "too short brand name"],
    },
    slug: {
      type: String,
      unique : true,
      lowercase: true,
      required: true,
    },
    logo: String,

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

const Brand = model("Brand", brandSchema);

export default Brand;
