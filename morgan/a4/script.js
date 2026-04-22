//global variables
var startTimer = false;
var timeLeft = 0;
var ocean = false;
var pause = false;
var End = new Audio("Never Gonna Give You Up Original.mp3")


function startButton() {
// var consistency = value of id = "consistency" (soft, medium, hard)
	// Start
	if (startTimer == false && pause == false) {
		startTimer = true;
		document.getElementById("startBtn").value = "Pause";
	
		if (document.getElementById("eggValue").value == "soft"){
			timeLeft = 180;
		}
		if (document.getElementById("eggValue").value == "medium"){
			timeLeft = 360;
		}
		if (document.getElementById("eggValue").value == "hard"){
			timeLeft = 720;
		}
		
	}
	
	// Pause
	else if (startTimer == true && pause == false) {
		// startTimer = false; 
		pause = true;
		document.getElementById("startBtn").value = "Resume";
		ocean = false;
	}
	else {
		document.getElementById("startBtn").value = "Pause";
		pause = false;
	}
}
	
function updateTimer(){
	if (startTimer == true && pause == false){
		
		if (timeLeft < 60) {
			// display for 60 seconds or less
			document.getElementById("timeDisplay").style.color = "red"
			var timeLeftMin = Math.floor(timeLeft / 60)
			var timeLeftSec = Math.floor(timeLeft % 60)
			var timeLeftMs = Math.floor(timeLeft * 100 % 100)
			document.getElementById("timeDisplay").innerHTML
				= "Time Left: " + timeLeftSec + "." + timeLeftMs;
		}
		else {
			var timeLeftMin = Math.floor(timeLeft / 60)
			var timeLeftSec = Math.floor(timeLeft % 60)
			var timeLeftMs = Math.floor(timeLeft * 100 % 100)
			document.getElementById("timeDisplay").innerHTML
				= "Time Left: " + timeLeftMin + ":" + timeLeftSec + "." + timeLeftMs;
		}
		
		
		if (timeLeft > 0.01){
			timeLeft = timeLeft - 0.01;
	    }
	
		else {
			timeLeft = 0;
			startTimer = false;
			document.getElementById("startBtn").value
				= "Start"
			End.play();
			resetAll();
		}
	}
}
	

function resetAll() {
	startTimer = false;
	pause = false;
	document.getElementById("timeDisplay").innerHTML
				= "Time Left: 0:00.00"
	document.getElementById("startBtn").value
				= "Start"
}
	
	
setInterval(updateTimer, 10); 
	
	
	
	
