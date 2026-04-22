// global variables
var startTimer = false;
var timeLeft = 0;

function startButton() {
	var consistency = document.getElementById("consistency").value;
	// get consistency from drop down menu: soft, medium, hard
	
	if (startTimer == false) {
		timeLeft = consistency; // change later depending on consistency, soft: 180
		startTimer = true
		document.getElementById("startBtn").value = "stop";
	}
    else { 
		startTimer = false;
		document.getElementById("startBtn").value = "start";
	}
}

function updateTimer() {
	if (startTimer == true) {
		if (timeLeft > 0.1) {
			timeLeft = timeLeft - 0.1; // reduce timeLeft by 0.1 seconds
		}
		else {
			timeLeft = 0;
			startTimer = false;
			// play sound
		}
		if (timeLeft <= 60) {
		// less than 60 seconds
		document.getElementById("timeDisplay").innerHTML
			= "Time Left: " + timeLeft.toFixed(1) + " sec";
		}
		else {
			// more than 1 minute
			var timeLeftMin = Math.floor(timeLeft / 60);
			var timeLeftSec = Math.floor(timeLeft % 60);
			document.getElementById("timeDisplay").innerHTML
				= "Time Left: " + timeLeftMin + " min "
								+ timeLeftSec + " sec";
	
		}
	}
}

setInterval(updateTimer, 100); // run updateTimer every 0.1 seconds
