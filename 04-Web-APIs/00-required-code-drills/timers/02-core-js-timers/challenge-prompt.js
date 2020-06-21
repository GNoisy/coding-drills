// Practice with timers


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
var questionOne = setTimeout(function() {alert("Question 1")}, 5000);
//This way does the same as above
// function questionOne () {
//     alert("Question 1");
//   }
  
// setTimeout(questionOne, 1000 * 5);

//clears timer above
clearTimeout(questionOne);


console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
// var questionTwo = setTimeout(function() {alert("Question 2")}, 1000*15);

function questionTwo() {
    alert("Question 2");
}

var questionTwo = setTimeout(questionTwo, 1000*15);

// Remove the timer you just made for Question 2
clearTimeout(questionTwo);



console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds

function questionThreePt1() {
    alert("Question 3 pt. 1");
}
var questionThreePt1 = setTimeout(questionThreePt1, 1000*15)


// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
function questionThreePt2() {
    alert("Question 3 pt. 2");
}
setTimeout(questionThreePt2, 1000*15)


console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
clearTimeout(questionThreePt1);


console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"


