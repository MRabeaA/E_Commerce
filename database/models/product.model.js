import mongoose, { model, Schema } from "mongoose";

const productShcema = new Schema(
  {
    title: {
      type: String,
      unique: [true, "title is invalid"],
      required: true,
      minLength: [2, "too short title"],
    },
    slug: {
      type: String,
      lowercase: true,
      required: true,
    },
    description: {
      type: String,
      minLength: 30,
      maxLength: 2000,
      required: true,
    },

    imgCover: String,
    image: [String],

    price: {
      type: Number,
      required: true,
      min: 0,
    },
    priceAfterDiscount: {
      type: Number,
      required: true,
      min: 0,
    },
    sold: Number, // number of Sales
    stock: {
      type: Number,
      min: 0,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    subCategory: {
      type: mongoose.Types.ObjectId,
      ref: "subCategory",
    },
    brand: {
      type: mongoose.Types.ObjectId,
      ref: "brand",
    },
    rateAvg: {
      type: Number,
      min: 0,
      max: 5,
    },
    rateCount: Number,
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

const Product = model("Product", productShcema);

export default Product;
