
// Script to convert month digit to month name
document.getElementById('calender').value = new Date().toISOString().substring(0, 10);
$("#calender").on("change", function() {
  this.setAttribute(
      "data-date",
      moment(this.value, "YYYY-MM-DD")
      .format( this.getAttribute("data-date-format") )
  )
}).trigger("change")

