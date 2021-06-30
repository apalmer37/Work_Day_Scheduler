
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
  
  var todayDate = moment().format('dddd, MMM Do YYYY');
  $("#currentDay").html(todayDate);

   // WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past (gray), present (red), or future (green)

var now = new Date().getHours();

function colorCode() {
  if (now > 9) {
    $("#comment9").addClass("past");
  } else if (now >= 9 && now < 10) {
    $("#comment9").addClass("present");
  } else if (now < 9) {
    $("#comment9").addClass("future");
  }
  if (now > 10) {
    $("#comment10").addClass("past");
  } else if (now >= 10 && now < 11) {
    $("#comment10").addClass("present");
  } else if (now < 10) {
    $("#comment10").addClass("future");
  }
  if (now > 11) {
    $("#comment11").addClass("past");
  } else if (now >= 11 && now < 12) {
    $("#comment11").addClass("present");
  } else if (now < 11) {
    $("#comment11").addClass("future");
  }
  if (now > 12) {
    $("#comment12").addClass("past");
  } else if (now >= 12 && now < 13) {
    $("#comment12").addClass("present");
  } else if (now < 12) {
    $("#comment12").addClass("future");
  }
  if (now > 13) {
    $("#comment1").addClass("past");
  } else if (now >= 13 && now < 14) {
    $("#comment1").addClass("present");
  } else if (now < 13) {
    $("#comment1").addClass("future");
  }
  if (now > 14) {
    $("#comment2").addClass("past");
  } else if (now >= 14 && now < 15) {
    $("#comment2").addClass("present");
  } else if (now < 14) {
    $("#comment2").addClass("future");
  }
  if (now > 15) {
    $("#comment3").addClass("past");
  } else if (now >= 15 && now < 16) {
    $("#comment3").addClass("present");
  } else if (now < 15) {
    $("#comment3").addClass("future");
  }
  if (now > 16) {
    $("#comment4").addClass("past");
  } else if (now >= 16 && now < 17) {
    $("#comment4").addClass("present");
  } else if (now < 16) {
    $("#comment4").addClass("future");
  }
  if (now > 17) {
    $("#comment5").addClass("past");
  } else if (now >= 17 && now < 18) {
    $("#comment5").addClass("present");
  } else if (now < 17) {
    $("#comment5").addClass("future");
  }
}


// save buttons
$('.btn').click(function (event) {
    console.log(event.target.id)

    var buttonId = event.target.id.split("button-")[1]
    var textAreaId = "#comment"+buttonId;
    var textContent = $(textAreaId)[0].value;
    console.log(textContent);

    localStorage.setItem(buttonId, textContent);

});


function nineAM() {
    //get data from local storage. Set value
    var textContent = localStorage.getItem("9");
    $("#comment9").val(textContent);
}
function tenAM() {
    //get data from local storage. Set value
    var textContent = localStorage.getItem("10");
    $("#comment10").val(textContent);
}
function elevenAM() {
    //get data from local storage. Set value
    var textContent = localStorage.getItem("11");
    $("#comment11").val(textContent);
}
function twelvePM() {
    //get data from local storage. Set value
    var textContent = localStorage.getItem("12");
    $("#comment12").val(textContent);
}
function onePM() {
    //get data from local storage. Set value
    var textContent = localStorage.getItem("1");
    $("#comment1").val(textContent);
}
function twoPM() {
    //get data from local storage. Set value
    var textContent = localStorage.getItem("2");
    $("#comment2").val(textContent);
}
function threePM() {
    //get data from local storage. Set value
    var textContent = localStorage.getItem("3");
    $("#comment3").val(textContent);
}
function fourPM() {
    //get data from local storage. Set value
    var textContent = localStorage.getItem("4");
    $("#comment4").val(textContent);
}
function fivePM() {
    //get data from local storage. Set value
    var textContent = localStorage.getItem("5");
    $("#comment5").val(textContent);
}




  
 