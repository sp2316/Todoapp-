const express = require('express');
const router= express.Router();

//  Routes with /create-todo will be handled here
const addController=require('../controllers/addController');
// Since we need to post the data to the DB,we use post method here
router.post('/',addController.create);

module.exports=router;