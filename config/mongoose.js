const mongoose = require('mongoose');

// Creating Db named as todo_list_db
mongoose.connect('mongodb://localhost/todo_list_db');

// Making connecting to the DB
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("Connected to DataBase Succesfully!");
})