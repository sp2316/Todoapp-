const express= require('express');
const port=8000;
const path=require('path');
const app=express();
app.use(express.urlencoded());
 
// Routes that start with / go to the routes folder
app.use('/',require('./routes')); 
// for allowing usage of css and js files
app.use(express.static('assets'));
// db is used to add mongoDB to our application
const db=require('./config/mongo');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));



app.listen(port,function(err){

 if(err){
     console.log('Error while running server',err);
     return;
 }

     console.log('Server is running on port',port);

});