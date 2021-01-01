const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ToDoListDb');

const db=mongoose.connection;

db.on('error',console.error.bind('Error in connecting to db'));

db.once('open',function(){
    console.log('Database connected succesfully');
})