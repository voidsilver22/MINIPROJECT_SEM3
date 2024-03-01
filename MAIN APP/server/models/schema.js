import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    
    fname: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    lname: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    Gender: {
      type: String,
      required: true,
      min: 4,
      max: 10,
    },
    date: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    password: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
