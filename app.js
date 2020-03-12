$(document).ready(function() {

var momentTime = moment().format("MMMM Do YYYY, h: mm:ss a");

var displayMom = $("#currentDay");

displayMom.text(momentTime);

var timezone = ["8:00am","9:00am","10:00","11:00am","12:00pm","1:00pm","2:00pm",]

for (var i = 0; i < timezone.length; i++) {

   

    var timezone = $("<button>");

    // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
    letterBtn.addClass("letter-button letter letter-button-color");

    // 4. Then give each "letterBtn" a data-attribute called "data-letter".
    letterBtn.attr("data-letter", timezone[i]);

    // 5. Then give each "letterBtns" a text equal to "letters[i]".
    letterBtn.text(timezone[i]);

    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
    $("#buttons").append(letterBtn);

  }


    
  







});