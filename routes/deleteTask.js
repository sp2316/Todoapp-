const express= require('express');

const router=express.Router();

// A function used to handle the callen route
const deleteTaskController=require('../controllers/deleteTaskContoller');

// Routes with /delete-task are handled here
router.get('/',deleteTaskController.delete);

module.exports=router;