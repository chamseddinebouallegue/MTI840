const mongoose = require ('mongoose');

const Node=require('./Node');
const data=require('./data');
const SensorSchema = mongoose.Schema({

        Id : String,
        Type: String,
        Name : String,
       

        data : [{

          type: mongoose.Schema.Types.ObjectId,
          ref: 'data'
           
        }],
        AddressS :{
          latitude:Number,
          longitude:Number
      },
        Node: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Node'
          }

       
       
});

module.exports=mongoose.model('Sensor', SensorSchema);