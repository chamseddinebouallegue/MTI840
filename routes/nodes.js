var express =require('express');
//var router = express.Router();
var mongoose = require('mongoose');
var Node =require('../models/Node');





const router =require('express-promise-router')();

const NodesController = require('../controllers/nodes');

router.route('/')
  .get(NodesController.index)
  .post(NodesController.newNode)
  .delete(NodesController.deleteNodes);

router.route('/:NodeId')
  .get(NodesController.getNode)
  .put(NodesController.replaceNode)
  .patch(NodesController.updateNode)
  .delete(NodesController.deleteNode);

router.route('/:NodeId/sensors')
  .get(NodesController.getNodeSensors)
  .post(NodesController.newNodeSensor);


router.route('/:NodeId/sensors/:sensorId/data')
  .get(NodesController.getSensorData)
  .post(NodesController.newSensorData);
 


router.route('/:NodeId/sensors/:sensorId')
  .get(NodesController.getNodeSensor)
  .put(NodesController.updateNodeSensors)
  .delete(NodesController.deleteNodeSensors);
















  module.exports=router;

  