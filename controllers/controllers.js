const Db = require('../models/task');

// Creating a PreExisting Array to convert month integer to month name
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
      
    })
  }).sort("created_At");
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


// Controller function to Delete Date from the DB
module.exports.deleteData = function(req, res){

  let id = req.query.id;

  Db.findByIdAndDelete(id, function(err){
    if (err) { console.log("Error in Deleting the object from DB"); return; }

    return res.redirect('back');
  })
}


// Deleting all the data from DB
module.exports.deleteAll = function(req, res){

  Db.remove({}, function(err){
    if (err) { console.log("Error in Deleting the object from DB"); return; }
    return res.redirect('back');
  })
}





