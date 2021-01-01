const express = require('express');


const router= express.Router();
const homepageController=require('../controllers/homepagecontroller');

// routes with / will be handled using the below get()
router.get('/',homepageController.home);
// routes having /create-todo  will be redirected to the createTodo.js file
router.use('/create-todo',require('./createTodo'));
// routes having /delete-task  will be redirected to the deleteTask.js file
router.use('/delete-task',require('./deleteTask'));

module.exports=router;
