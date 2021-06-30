window.onload = function(){
    colorCode();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
   }
  
  // WHEN I open the planner
  // THEN the current day and time is displayed at the top of the calendar
  
  var currentDay = moment().format("dddd LL");
  $("#currentDay").append(currentDay);
  
  var currentTime = moment().format("LT");
  $("#currentTime").append(currentTime);