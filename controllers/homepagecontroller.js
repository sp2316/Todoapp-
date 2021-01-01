// Renders the home page view with the data present in the database(i.e fetched from db)
module.exports.home=function(req,res){
    require('../models/todo').find({},function(err,data){
      if(err){
          console.log('cant fetch data!!');
          return;
      }
      var d=new Date();
            return  res.render('todo',{'todolist':data,'date':String(d).substring(0,10)});

    })
    
}