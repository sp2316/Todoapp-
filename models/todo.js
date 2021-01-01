const mongoose=require('mongoose');
// Our required schema contains description,category,date 
const toDoSchema=mongoose.Schema({
 
    description:{
        type: String,
        required:true
    }
    ,
    category:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    }


});

// This will be used to create,delete,modify data in the database
const ToDOList=mongoose.model('todo-list',toDoSchema);

module.exports=ToDOList;