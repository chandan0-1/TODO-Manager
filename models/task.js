const mongoose = require('mongoose');

// Creating Schema for Project
const taskSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  },
},{
  timestamps:true
});

const Task = mongoose.model('Task', taskSchema);

// Exporting this file so that I can access outside of parent Directory
module.exports = Task;