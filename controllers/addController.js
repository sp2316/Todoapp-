// Creates an Entry into the database
module.exports.create=function(req,res){
    
    require('../models/todo').create({
        description:req.body.desc,
        category:req.body.category,
        date:req.body.date
    },function(err,newData){
        if(err){
            console.log('error adding data to db');
            return;
        }
        return res.redirect('back');
    });
    


}