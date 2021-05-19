const Db = require('../models/task');


var month = [
  "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"
]


module.exports = function (req, res) {
  // Setting count from the DB 
  var Count = 0;
  Db.estimatedDocumentCount({}, function( err, count){
    Count = count
  });

  // Populating the DB using find()
  Db.find({} , function(err, db){
    if (err) { console.log("Error in creating the DB"); return; }

    return res.render('index', {
      title: "ToDo Manager",
      month:month,
      Data: db,
      db_length:Count
      
    });
  })
}


// Controller function to push Date in the DB
module.exports.createData = function (req, res) {

  console.log(req.body)
  Db.create(req.body, function (err, data) {
    if (err) { console.log("Error in creating the DB"); return; }

    console.log(data);
    return res.redirect('/');
  })
  // dataList.push(req.body)
}


