var currentDay = $("#currentDay");
let currentDate = moment();
currentDay.innerHTML = currentDate.format("dddd MMMM Do"); //
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

//need to color the table - currentHournow and parentHour to compare
//if past
//if present
//if future

//9 to 5 - 8 hour day

//need to create a row

//need a text area and some button

//need a parent div to hold the hour use moment to do time on 24 clock 

//moment gives us current time

//rows will color depending on hour

//this is scoped locally

