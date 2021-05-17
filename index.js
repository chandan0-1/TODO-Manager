const express = require('express')
const db = require('./config/mongoose');
const Task = require("./models/task");
const app = express();
const port = 8000;


app.use("/", require('./routes/index'));

app.listen(port, function(err){
  if (err) {console.log(err); return}

  console.log(`Server is running on port: ${port}`);
});
