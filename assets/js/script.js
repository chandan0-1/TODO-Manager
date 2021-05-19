document.getElementById('calender').value = new Date().toISOString().substring(0, 10);
$("#calender").on("change", function() {
  this.setAttribute(
      "data-date",
      moment(this.value, "YYYY-MM-DD")
      .format( this.getAttribute("data-date-format") )
  )
}).trigger("change")




  VanillaTilt.init(document.querySelectorAll("#title"), {
    max: 25,
    speed: 400
  });
  
  // //It also supports NodeList
  // VanillaTilt.init(document.querySelectorAll("#display"));
