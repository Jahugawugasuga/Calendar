var currentDay = $("#currentDay");
currentDay.html(moment().format("dddd MMMM Do")); 
// let currentDate = currentDay.moment().format("dddd MMMM Do")
// currentDate.inn
var workHours =[9,10,11,12,13,14,15,16,17];
let currentHourNow = moment().format("HH");

$(document).ready(function() { //once everything is ready
$(".saveBtn").click (function(){
    var userInput = $(this).siblings("textarea").val(); //target text area class
    var parentHour = parseInt($(this).parent().attr("id")) 
    localStorage.setItem(parentHour,userInput); 
}) 

for (var i=0; i<workHours.length; i++){
    $("#"+workHours[i]+ " .textarea").val(localStorage.getItem(workHours[i]));
} //this cycles through the text area rows values and replaces them with stored info

setInterval(timeTracker(),60000) //runs timetracker until window is closed, updates every minute
function timeTracker() {

    let currentHourNow = moment().format("HH");
   
$("textarea").each(function(){
    var timeHour = parseInt($(this).parent().attr("id"));
    if (timeHour<currentHourNow){
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");

        
    } else if (timeHour>currentHourNow) {
        
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      
    } else {
        
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    
    }
})

   
}

timeTracker();

})


