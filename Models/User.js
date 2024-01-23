import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  hobby: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
});

export const UserModel = mongoose.model("Users", UserSchema);
