module.exports = function(req, res){
  return res.send("from Cntrls");
}


module.exports.home = function(req, res){
  return res.send("from Cntrls's Homepage");
}

