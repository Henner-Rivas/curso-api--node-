const mongoose = require("mongoose");
const mongooseDelete= require("mongoose-delete")

const userScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
timestamps:true, // todo createdat, updateAt
  versionKey:false
}
);

module.exports= mongoose.model("users",userScheme)
