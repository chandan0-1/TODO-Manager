const express = require('express')
const expressEjsLayouts = require("express-ejs-layouts");
const db = require('./config/mongoose');

// Fetching DB named as Task from DB
const Task = require("./models/task");
const app = express();

// defined port on which server will run
const port = process.env.PORT || 8000;

app.use(express.urlencoded());

//using EJS as middleware to render pages 
app.use(expressEjsLayouts);

app.use(express.static('./assets'));
// extracting styles and script file from subpages to the head
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Setting up view engine
app.set("view engine", "ejs");
app.set("views","./views");

// Setting up route directory Structure
app.use("/", require('./routes/index'));


app.listen(port, function(err){
  if (err) {console.log(err); return}

  console.log(`Server is running on port: ${port}`);
});
