


module.exports = function(req, res){
  console.log(req.body)
  var c = [
    {
      name:"need to go on walk at 7AM",
      date:"20 May 2021",
      category:"Important"
    },
    {
      name:"need to have Dinner at * PM",
      date:"21 May 2021",
      category:"Other"
    }
  ]
  return res.render('index',{
    title: "ToDo Manager",
    Data: c
  });
}


module.exports.home = function(req, res){
  return res.send("from Cntrls's Homepage");
}

