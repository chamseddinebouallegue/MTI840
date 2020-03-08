const mongoose = require ('mongoose');
const Sensor=require('./Sensor');
const NodeSchema = mongoose.Schema({

        IdN : String,
        
        Name: String,
       
        AddressN:{
          latitude:Number,
          longitude:Number
        
        },
        sensors:[{
          
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sensor'
          
        }]

        
       
        

});

module.exports=mongoose.model('Node', NodeSchema);


