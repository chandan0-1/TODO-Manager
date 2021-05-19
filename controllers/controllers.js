var dataList = [
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

module.exports = function(req, res){
  
  
  return res.render('index',{
    title: "ToDo Manager",
    Data: dataList
  });
}


module.exports.createData = function(req, res){

  console.log(req.body)
  dataList.push(req.body)
  return res.redirect('/')

}

module.exports.home = function(req, res){
  return res.send("from Cntrls's Homepage");
}

