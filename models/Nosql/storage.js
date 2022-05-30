const mongoose = require("mongoose");

const storageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
    type: String,
    }
  },
  {
timestamps:true, // todo createdat, updateAt
  versionKey:false
}
);

module.exports= mongoose.model("storages",storageScheme)
