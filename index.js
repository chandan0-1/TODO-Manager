const express = require('express')
const expressEjsLayouts = require("express-ejs-layouts");
const db = require('./config/mongoose');
const Task = require("./models/task");
const app = express();
const port = 8000;

app.use(express.urlencoded());
app.use(expressEjsLayouts);

app.use(express.static('./assets'));
// extracting styles and script file from subpages to the head
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.set("view engine", "ejs");
app.set("views","./views");

app.use("/", require('./routes/index'));

app.listen(port, function(err){
  if (err) {console.log(err); return}

  console.log(`Server is running on port: ${port}`);
});
