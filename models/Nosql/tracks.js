const mongoose = require("mongoose");

const trackScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
       validate:{
         validator:(req)=>{
           return true
         },
         message:"Error_url"  
       }
    },
    artist: {
     name:{
         type:String
     },
     nickname:{
       type:String,  
     },
     nationality:{
         type:String
     }
    },
    duration: {
     start:{
       type:Number
     },
     end:{
        type:Number
     },
     mediaId:{
         type:mongoose.Types.ObjectId
     }

    },
  },
  {
timestamps:true, // todo createdat, updateAt
  versionKey:false
}
);

module.exports= mongoose.model("tracks",trackScheme)