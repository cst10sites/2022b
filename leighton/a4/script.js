// global variables
var startTimer = false;
var timeLeft = 1;
var nClicks = 0;
var myAudio = new Audio('bgmusic.mp3');

function startButton() {
// var consistency = value of id = "consistency" {soft, medium, hard}
// var chosenConsistency = document.getElementById("consistency").value;
nClicks = nClicks + 1
if (startTimer == false){
startTimer = true;
timeLeft = document.getElementById("consistency").value; //change later depending on consistency, soft: 180
document.getElementById("startBtn").value = "Reset";
myAudio.stop();
}
// else { ...
if (nClicks == 2) {
timeLeft = 0;
document.getElementById("timeDisplay").innerHTML = "0.0";
document.getElementById("pauseBtn").value = "Pause";
nClicks = 0;
myAudio.stop();
}
}

function updateTimer() {
if (startTimer == true) {
if (timeLeft <= 60) {
// display for 60 seconds of less
document.getElementById("timeDisplay").innerHTML
= "Time Left: <span style='color: red'>" + timeLeft.toFixed(1) + " sec </span>";
}
else {
// display for 1 minute or more
var timeLeftMin = Math.floor(timeLeft / 60);
var timeLeftSec = Math.floor(timeLeft % 60);
document.getElementById("timeDisplay").innerHTML
= "Time Left: " + timeLeftMin + "min " + timeLeftSec + "sec";
}

if (timeLeft > 0.1) {
timeLeft = timeLeft - 0.1; // seconds reduced from timeLeft

}

else {
timeLeft = 0;
myAudio.play();
startTimer = false;
document.getElementById("startBtn").value = "Start";
document.getElementById("timeDisplay").innerHTML
= "Time Left: <span style='color: black'>" + timeLeft.toFixed(1) + " sec </span>";
nClicks = 0
}

}
}

setInterval(updateTimer, 100); // 100 = run updateTimer every 0.1 seconds


function pauseButton() {
if (startTimer == true) {
startTimer = false
document.getElementById("pauseBtn").value = "Resume";
}
else {
startTimer = true
document.getElementById("pauseBtn").value = "Pause";
}
}

/* function resetButton() {
timeLeft = 0;
document.getElementById("timeDisplay").value = "0.0";
} */
