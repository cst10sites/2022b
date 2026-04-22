// global variables
var startTimer = false;
var timeLeft = 0;
var nClicks = 0;
var omgMyLegsAreLegs = 0;
var myAudio = new Audio('AlarmFinish.mp3');

function startButton() {
	// var consistency = value of id = "consistency" {soft, medium, hard}
	// var chosenConsistency = document.getElementById("consistency").value;
	nClicks = nClicks + 1
	if (startTimer == false){
			startTimer = true;
			timeLeft = document.getElementById("consistency").value; //change later depending on consistency, soft: 180
			document.getElementById("startBtn").value = "Reset";
	}
	// else { ...
	if (nClicks == 2) {
		timeLeft = 0;
		document.getElementById("timeDisplay").innerHTML = "Time Left: 0.0 sec";
		document.getElementById("pauseBtn").value = "Pause";
		nClicks = 0;
	}
	if (myAudio == true) {
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
			startTimer = false;
		}
		if (timeLeft == 0) {
			startTimer = false;
			document.getElementById("startBtn").value = "Start";
			document.getElementById("timeDisplay").innerHTML
				= "Time Left: <span style='color: white'>" + timeLeft.toFixed(1) + " sec </span>";
			nClicks = 0
		}
		if (timeLeft == 0.1) {
			myAudio.play();
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