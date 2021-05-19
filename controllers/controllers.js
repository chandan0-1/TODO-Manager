const Db = require('../models/task');
// var dataList = [
//   {
//     name: "need to go on walk at 7AM",
//     date: "20 May 2021",
//     category: "Important"
//   },
//   {
//     name: "need to have Dinner at * PM",
//     date: "21 May 2021",
//     category: "Other"
//   }
// ]

var month = [
  "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"
]

// var cateogryColor = [ {"a": "green", "b": "red"}]
// var cateogryColor = [ "School", "Important", "Personal", "Other", "Work" ];

module.exports = function (req, res) {
  var Count = 0;
  Db.estimatedDocumentCount({}, function( err, count){
    Count = count
  });

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


module.exports.createData = function (req, res) {

  console.log(req.body)
  Db.create(req.body, function (err, data) {
    if (err) { console.log("Error in creating the DB"); return; }

    console.log(data);
    return res.redirect('/');
  })


  // dataList.push(req.body)

}

module.exports.home = function (req, res) {
  return res.send("from Cntrls's Homepage");
}

