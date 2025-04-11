import mongoose, { Schema } from "mongoose";

const couponSchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
      required: true,
    },
    expires: Date,
    discount: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Coupon = model("Coupon", couponSchema);

export default Coupon;
