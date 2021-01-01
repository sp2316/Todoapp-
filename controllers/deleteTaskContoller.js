// Deletes entries that are present in the database
module.exports.delete=function(req,res){
    const id_list=(req.query.del_list).split(',');
    console.log(String(req.query.del_list).split(','));
    const Todo=require('../models/todo');
    
    Todo.deleteMany({
        _id:{
            $in:id_list
        }
        
            
    },function(err,result){
        if(err){
            console.log('unable to delete from db');
            return;
        }
        return res.redirect('back');

    })
}