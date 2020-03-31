var currentDay = document.querySelector("#currentDay");
let currentDate = moment();
currentDay.innerHTML = currentDate.format("dddd MMMM Do")

var currentHour=document.querySelector(".timeBlock");
let currentHourNow = moment();
currentHour = this.string < currentHourNow.format("HH")


let parentElement = document.querySelector(".container");
// parentElement.classList.add("description");
let childElement1 = document.createElement("div");
let childElement2 = document.createElement("div");
let childElement3 = document.createElement("div");
let childElement4 = document.createElement("div");
let childElement5 = document.createElement("div");
let childElement6 = document.createElement("div");
let childElement7 = document.createElement("div");
let childElement8 = document.createElement("div");

parentElement.appendChild(childElement1);
parentElement.appendChild(childElement2);
parentElement.appendChild(childElement3);
parentElement.appendChild(childElement4);
parentElement.appendChild(childElement5);
parentElement.appendChild(childElement6);
parentElement.appendChild(childElement7);
parentElement.appendChild(childElement8);

//line 1
//time block in form of span, notes block in form, save button in button
let timeBlock1 = document.createElement("span");
    childElement1.appendChild(timeBlock1);
    timeBlock1.innerHTML = "9:00";
    timeBlock1.style.cssFloat = "left";
    timeBlock1.classList.add("columnWidth");
    timeBlock1.classList.add("hour");
    timeBlock1.classList.add("timeBlock");
let notesBlock1 = document.createElement("textarea");
    childElement1.appendChild(notesBlock1);
    notesBlock1.classList.add("row");
    notesBlock1.classList.add("textarea");
    notesBlock1.classList.add("present");
let userInput1 = document.createElement("input");
let note1=   notesBlock1.appendChild(userInput1);
let buttonBlock1 = document.createElement("button");
buttonBlock1.setAttribute("id", "Btn1");
    childElement1.appendChild(buttonBlock1);
    buttonBlock1.innerHTML = "Save Button";
    buttonBlock1.classList.add("saveBtn");
    buttonBlock1.classList.add("saveBtn_i:hover");
        buttonBlock1.style.cssFloat = "right";

//line 2 - 
let timeBlock2 = document.createElement("span");
    childElement2.appendChild(timeBlock2);
    timeBlock2.innerHTML = "10:00";
    timeBlock2.style.cssFloat = "left";
    timeBlock2.classList.add("hour");
    timeBlock2.classList.add("timeBlock");
let notesBlock2 = document.createElement("textarea");
    childElement2.appendChild(notesBlock2);
    notesBlock2.classList.add("row");
    notesBlock2.classList.add("textarea");
let userInput2 = document.createElement("input");
 let note2= notesBlock2.appendChild(userInput2);
let buttonBlock2 = document.createElement("button");
buttonBlock2.setAttribute("id", "Btn2");
    childElement2.appendChild(buttonBlock2);
    buttonBlock2.innerHTML = "Save Button";
    buttonBlock2.classList.add("saveBtn");
    buttonBlock2.classList.add("saveBtn_i:hover");
        buttonBlock2.style.cssFloat = "right";

//line 3 - time block, notes block, save button
let timeBlock3 = document.createElement("span");
    childElement3.appendChild(timeBlock3);
    timeBlock3.innerHTML = "11:00";
    timeBlock3.style.cssFloat = "left";
    timeBlock3.classList.add("hour");
    timeBlock3.classList.add("timeBlock");
let notesBlock3 = document.createElement("textarea");
childElement3.appendChild(notesBlock3);
notesBlock3.classList.add("row");
notesBlock3.classList.add("textarea");
let userInput3 = document.createElement("input");
 let note3=  notesBlock3.appendChild(userInput3);
let buttonBlock3 = document.createElement("button");
buttonBlock3.setAttribute("id", "Btn3");
childElement3.appendChild(buttonBlock3);
buttonBlock3.innerHTML = "Save Button";
buttonBlock3.classList.add("saveBtn");
buttonBlock3.classList.add("saveBtn_i:hover");
buttonBlock3.style.cssFloat = "right";

//line 4 - time block, notes block, save button
let timeBlock4 = document.createElement("span");
    childElement4.appendChild(timeBlock4);
    timeBlock4.innerHTML = "12:00";
    timeBlock4.style.cssFloat = "left";
    timeBlock4.classList.add("hour");
    timeBlock4.classList.add("timeBlock");
let notesBlock4 = document.createElement("textarea");
childElement4.appendChild(notesBlock4);
notesBlock4.classList.add("row");
notesBlock4.classList.add("textarea");
let userInput4 = document.createElement("input");
let note4 =  notesBlock4.appendChild(userInput4);
let buttonBlock4 = document.createElement("button");
buttonBlock4.setAttribute("id", "Btn4");
childElement4.appendChild(buttonBlock4);
buttonBlock4.innerHTML = "Save Button";
buttonBlock4.classList.add("saveBtn");
buttonBlock4.classList.add("saveBtn_i:hover");
buttonBlock4.style.cssFloat = "right";

//line 5 - time block, notes block, save button
let timeBlock5 = document.createElement("span");
    childElement5.appendChild(timeBlock5);
    timeBlock5.innerHTML = "1:00";
    timeBlock5.style.cssFloat = "left";
    timeBlock5.classList.add("hour");
    timeBlock5.classList.add("timeBlock");
let notesBlock5 = document.createElement("textarea");
childElement5.appendChild(notesBlock5);
notesBlock5.classList.add("row");
notesBlock5.classList.add("textarea");
let userInput5 = document.createElement("input");
let note5=   notesBlock5.appendChild(userInput5);
let buttonBlock5 = document.createElement("button");
buttonBlock5.setAttribute("id", "Btn5");
childElement5.appendChild(buttonBlock5);
buttonBlock5.innerHTML = "Save Button";
buttonBlock5.classList.add("saveBtn");
buttonBlock5.classList.add("saveBtn_i:hover");
buttonBlock5.style.cssFloat = "right";

//line 6 - time block, notes block, save button
let timeBlock6 = document.createElement("span");
childElement6.appendChild(timeBlock6);
timeBlock6.innerHTML = "2:00";
timeBlock6.style.cssFloat = "left";
timeBlock6.classList.add("hour");
    timeBlock6.classList.add("timeBlock");
let notesBlock6 = document.createElement("textarea");
childElement6.appendChild(notesBlock6);
notesBlock6.classList.add("row");
notesBlock6.classList.add("textarea");
let userInput6 = document.createElement("input");
 let note6 =  notesBlock6.appendChild(userInput6);
let buttonBlock6 = document.createElement("button");
buttonBlock6.setAttribute("id", "Btn6");
childElement6.appendChild(buttonBlock6);
buttonBlock6.innerHTML = "Save Button";
buttonBlock6.classList.add("saveBtn");
buttonBlock6.classList.add("saveBtn_i:hover");
buttonBlock6.style.cssFloat = "right";

//line 7 - time block, notes block, save button
let timeBlock7 = document.createElement("span");
childElement7.appendChild(timeBlock7);
timeBlock7.innerHTML = "3:00";
timeBlock7.style.cssFloat = "left";
timeBlock7.classList.add("hour");
    timeBlock7.classList.add("timeBlock");
let notesBlock7 = document.createElement("textarea");
childElement7.appendChild(notesBlock7);
notesBlock7.classList.add("row");
notesBlock7.classList.add("textarea");
let userInput7 = document.createElement("input");
    let note7 =  notesBlock7.appendChild(userInput7);
let buttonBlock7 = document.createElement("button");
buttonBlock7.setAttribute("id", "Btn7");
childElement7.appendChild(buttonBlock7);
buttonBlock7.innerHTML = "Save Button";
buttonBlock7.classList.add("saveBtn");
buttonBlock7.classList.add("saveBtn_i:hover");
buttonBlock7.style.cssFloat = "right";

//line 8 - time block, notes block, save button
let timeBlock8 = document.createElement("span");
childElement8.appendChild(timeBlock8);
timeBlock8.innerHTML = "4:00";
timeBlock8.style.cssFloat = "left";
timeBlock8.classList.add("hour");
    timeBlock8.classList.add("timeBlock");
let notesBlock8 = document.createElement("textarea");
childElement8.appendChild(notesBlock8);
notesBlock8.classList.add("row");
notesBlock8.classList.add("textarea");
let userInput8 = document.createElement("input");
    let note8 = notesBlock8.appendChild(userInput8);
let buttonBlock8 = document.createElement("button");
buttonBlock8.setAttribute("id", "Btn8");
childElement8.appendChild(buttonBlock8);
buttonBlock8.innerHTML = "Save Button";
buttonBlock8.classList.add("saveBtn");
buttonBlock8.classList.add("saveBtn_i:hover");
buttonBlock8.style.cssFloat = "right";

//click to save user input in form 
// let saveUserInput = document.querySelector('input').value

// document.querySelectorAll("button").addEventListener("click", saveFunction);

function saveFunction1 (){
    localStorage.setItem("User Input", JSON.stringify(userInput1.value));
}
function saveFunction2 (){
    localStorage.setItem("User Input", JSON.stringify(userInput2.value));
}
function saveFunction3 (){
    localStorage.setItem("User Input", JSON.stringify(userInput3.value));
}
function saveFunction4 () {
    localStorage.setItem("User Input", JSON.stringify(userInput4.value));
}
function saveFunction5 () {
    localStorage.setItem("User Input", JSON.stringify(userInput5.value));
}
function saveFunction6 () {
    localStorage.setItem("User Input", JSON.stringify(userInput6.value));
}
function saveFunction7 () {
    localStorage.setItem("User Input", JSON.stringify(userInput7.value));
}
function saveFunction8 () {
    localStorage.setItem("User Input", JSON.stringify(userInput8.value));
    
}


document.getElementById("Btn1").addEventListener("click",saveFunction1);
    
document.getElementById("Btn2").addEventListener("click",saveFunction2);
    
document.getElementById("Btn3").addEventListener("click",saveFunction3);
    
document.getElementById("Btn4").addEventListener("click",saveFunction4);
    
document.getElementById("Btn5").addEventListener("click",saveFunction5);
    
document.getElementById("Btn6").addEventListener("click",saveFunction6);
    
document.getElementById("Btn7").addEventListener("click",saveFunction7);
    
document.getElementById("Btn8").addEventListener("click",saveFunction8);
    

window.onload = function() {
    let storedData = localStorage.getItem("userInput1");
    if (storedData !== null) $("input").val("userInput1");
}
   











// var workHours = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"]

// for (var i=0; i<workHours.length ; i++ ){

// document.body.appendChild(timeBlock1);
// timeBlock1.innerHTML=  ["9:00"];
// timeBlock1.classList.add("hour");


// }

// nineAm.classList.add("time-block"); //not sure what this one does
// nineAm.classList.add("description"); not sure what this one does either

// var tenAm =document.createElement("div");
// document.body.appendChild(tenAm);
// tenAm.innerHTML= "10:00";
// tenAm.classList.add("hour");
// console.log(workHours[1])





// var nineAm =document.createElement("span");
// document.body.appendChild(nineAm);
// nineAm.innerHTML= "10:00 AM";

// var lineBreak = document.createElement("br");
// document.body.appendChild(lineBreak);

// var nineAm =document.createElement("span");
// document.body.appendChild(nineAm);
// nineAm.innerHTML= "11:00 AM";

// var lineBreak = document.createElement("br");
// document.body.appendChild(lineBreak);
