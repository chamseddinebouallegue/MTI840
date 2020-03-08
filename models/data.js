
const mongoose =require('mongoose');
const Schema=mongoose.Schema;


const dataSchema=new Schema({

  createdAt: {type: Date},
  unity:String,
  value:Number,
 
  

  correspond :{
    type:Schema.Types.ObjectId,
    ref:'Sensor'
  },



});


const data=mongoose.model('data',dataSchema);
module.exports=data;


