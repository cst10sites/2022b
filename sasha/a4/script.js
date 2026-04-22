var startTimer = false;
var timeLeft = 0;
var clicks = 0;
var aCount = 0;

function startButton() {
	if (startTimer == false) {
		startTimer = true;
		if (aCount == 0) {
			document.getElementById("startBtn").innerHTML = 
				"Stop";
			document.getElementById("alarm").innerHTML = 
				"Boiling";
		}
		if (clicks == 0) {
			timeLeft = document.getElementById("timeNeeded").value;
			setInterval(updateTimer, 1000);
			updateTimer();
		}
	} else {
		startTimer = false;
		if (aCount == 0) {
			document.getElementById("startBtn").innerHTML = 
				"Resume";
			document.getElementById("alarm").innerHTML = 
				"Ready";
		}
	}
	clicks = clicks + 1;
}

function resetTimer() {
	if (clicks > 0) {
		startTimer = true;
		document.getElementById("startBtn").innerHTML = 
			"Start";
		document.getElementById("alarm").innerHTML = 
			"Ready";
		aCount = 0;
		timeLeft = document.getElementById("timeNeeded").value;
		updateTimer();
		startTimer = false;
	}
}

function updateTimer() {
	if (startTimer == true) {
		if (timeLeft < 60) {
			document.getElementById("timeDisplay").innerHTML = 
				'<span style="color: red;">Time left: ' + timeLeft + " sec" + '</span>';
		} else {
			var timeLeftMin = Math.floor(timeLeft / 60);
			var timeLeftSec = Math.floor(timeLeft % 60);
			if (timeLeftSec > 9) {
				document.getElementById("timeDisplay").innerHTML = 
					"Time left: " + timeLeftMin + ":" + timeLeftSec;
			} else {
				document.getElementById("timeDisplay").innerHTML = 
					"Time left: " + timeLeftMin + ":0" + timeLeftSec;
			}
		}
		if (timeLeft > 0) {
			timeLeft = timeLeft - 1;
		} else {
			timeLeft = 0;
			startTimer = false;
			var myAudio = new Audio('buzzer.mp3');
			myAudio.play();
			if (aCount == 0) {
				document.getElementById("alarm").innerHTML = 
					'<span style="color: red">TIME TO EAT THE EGGS!</span>';
				setInterval(alarmUpdate, 200);
				aCount = 1;
			}
		}
	}
}
function alarmUpdate() {
	if (aCount > 0) {
		aCount = aCount + 1;
		if (aCount % 2 == 0) {
			document.getElementById("alarm").innerHTML = 
				'<span style="color: red">TIME TO EAT THE EGGS!</span>';
		} else {
			document.getElementById("alarm").innerHTML = 
				'<span style="color: black">TIME TO EAT THE EGGS!</span>';
		}
	}
	if (aCount == 10) {
		aCount = 2;
	}
}