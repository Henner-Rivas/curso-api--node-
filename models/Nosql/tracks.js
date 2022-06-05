const mongoose = require("mongoose");
const mongooseDelete= require("mongoose-delete")
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
/* implentar metodo propio con relacion a storage */
trackScheme.statics.findAllData = function() {
 const joinData= this.aggregate([
   {
     $lookup:{
       from:"storages",
       localField:"mediaId",
       foreignField:"_id",
      as:"audio"
     },
   },
   {
     $unwind:"$audio"
   }
 ])
 
  return joinData
}

trackScheme.statics.findOneData = function(id) {
  const joinData= this.aggregate([
    {
      $lookup:{
        from:"storages",
        localField:"mediaId",
        foreignField:"_id",
       as:"audio"
      },
    },
    {
      $unwind:"$audio"
    },
    {$match:{
      _id:mongoose.Types.ObjectId(id)
    }}
  ])
  
   return joinData
 }


trackScheme.plugin(mongooseDelete,{overrideMethods:"all"})

module.exports= mongoose.model("tracks",trackScheme)
