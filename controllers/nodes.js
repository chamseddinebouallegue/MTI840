
const Node=require('../models/Node');
const Sensor=require('../models/Sensor');
const Data=require('../models/data');
const mongoose =require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

module.exports ={


    index: async(req,res,next) => {
      const nodes = await Node.find({}).populate({path:'sensors',populate: {path:'data'}}).exec();
    res.status(200).json(nodes);
  
},
newNode: async(req,res,next) => {

    const newNode = new Node(req.body);
    res.status(201).json(newNode);
    const node= await newNode.save();
    
  
  },

  deleteNodes: async(req,res,next) => {

    const result= await Node.deleteMany();
    res.status(200).json({success:true});
    
  
  },

  getNode: async (req,res,next) => {  

    const nodeId=req.params;
    const node=await Node.findById(nodeId.NodeId).populate({path:'sensors',populate: {path:'data'}}).exec();
    res.status(200).json(node);
  
  },
  
  replaceNode: async(req,res,next) => {
    const {nodeId}= req.params;
    const newNode=req.body;
    const result =await Node.findByIdAndUpdate(nodeId,newNode);
    res.status(200).json({success:true});
  },
  
  updateNode: async (req,res,next) => {
    const {nodeId}= req.params;
    const newNode=req.body;
    const result =await Node.findOneAndUpdate(nodeId,newNode);
    res.status(200).json({newNode});
  
  },
  
  deleteNode: async (req,res,next) => {
    const {nodeId}=req.params;
    const result= await Node.findOneAndRemove(nodeId);
    res.status(200).json({result});
  },


  getNodeSensors: async (req,res,next) => {
    const {nodeId}=req.params;
    const node= await Node.findById(nodeId).populate({path:'sensors',populate: {path:'data'}}).exec();
  
    res.status(200).json(node.patients);
  
  },

  getNodeSensor: async (req,res,next) => {
    const {nodeId}= req.params;
    const {sensorId} =req.params;
    const sensor=await Sensor.findById(sensorId).populate('data');
    res.status(200).json(sensor);

},
  
  newNodeSensor: async(req,res,next) => {
    
    const nodeId=req.params.NodeId;

    const newSensor=new Sensor(req.body);

 
    const node= await Node.findById(nodeId);
  
    newSensor.Node=node;
  
    await newSensor.save();
  
    node.sensors.push(newSensor);
   
    await node.save();
  
   res.status(201).json(newSensor._id);
  
  
  },


  getSensorData: async(req,res,next) => {
    const {sensorId}=req.params;
  //  const {doctorId}=req.params;
    const sensor= await Sensor.findById(sensorId).populate('data').select('data -_id').exec();
    res.status(200).json(sensor);

},
  


newSensorData: async (req,res,next) => {

  const {sensorId} =req.params;

  const {NodeId} =req.params;
 /* const lastData= await
Patient.aggregate(
[ { $match : { _id : ObjectId(patientId)} },
  { $unwind: "$data" },
 

  { $lookup: {from: 'data', localField: 'data', foreignField: '_id', as: 'result'} },

  {$unwind: "$result" },
  {$project: { "result.createdAt":1, "result.HeartRate":1, "result.Steps":1, "result.SleepingHours":1 }},

  {$group: {_id: "$_id",lastRegistered: { $last: "$result.HeartRate" } } }

]

);
*/
// res.status(201).json(lastMeasure[0].lastRegistered);

  const newData=new Data(req.body);

  newData.set("createdAt",Date.now());

  //newData.value=newData.value.toFixed(2);

  //if(lastData[0].lastRegistered==null){
    const sensor = await
    Sensor.findById(sensorId);

    newData.correspond = sensor;

    await
    newData.save();

    

    sensor.data.push(newData);

    await
    sensor.save();

  //  res.status(200).json(newData.HeartRate);

   /* if(newData.HeartRate>100){

      var d = new Date();
      console.log("High heart Rate");




    }*/

    
    },
    deleteNodeSensors : async (req,res,next) => {

        const {sensorId}= req.params;
      // const {doctorId}=req.params;
      const result= await Sensor.findOneAndDelete({"_id":sensorId});
      res.status(200).json(result);
  
  },
  updateNodeSensors: async (req,res,next) => {
    const {sensorId}= req.params;
    
    const newSensor=req.body;
    const result =await Sensor.findOneAndUpdate({"_id":sensorId},newSensor);
    res.status(200).json(newSensor);
  }
       
  }

  