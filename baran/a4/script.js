var startTimer = false;
var timeLeft = 0;
var myAudio = new Audio('bgmusic.mp3');
var paused = true;


function startButton() {
	var consistency = document.getElementById("consistency").value;
	
	if (startTimer == false && paused == true) {
		 if (consistency == "Soft") {
			timeLeft = 3 * 60;
		}
		else if (consistency == "Medium") {
			timeLeft = 6 * 60
		}
		
		else {
			timeLeft = 10 * 60;
		}
		
		startTimer = true;
		paused = false;
		document.getElementById("startBtn").value = "Pause";
	}
	else if (startTimer == true && paused == false) {
		document.getElementById("startBtn").value = "Resume";
		paused = true;
	}
	else if (startTimer == true && paused == true) {
		document.getElementById("startBtn").value = "Pause";
		paused = false;
	}
	else {
		startTimer = false;
		document.getElementById("startBtn").value = "Resume";
	}
	
}



/* function updateTimer() {
    if (paused) return;                 
} */




function updateTimer() {
	if (startTimer == true && paused == false){
		if (timeLeft > 0.1) {
			timeLeft = timeLeft - 0.1; //reduce time left by 0.1 seconds
		}
		else {
			timeLeft = 0;
			startTimer = false;
			// play sound
			myAudio.play();
}
		}
		
		if (timeLeft <= 60) {
			// less than 60 seconds
			document.getElementById("timeDisplay").innerHTML
				= "Time Left: <span style='color:red'>" + timeLeft.toFixed(1) + " sec </span>";
				
		}
		
		/*if (timeLeft == 0.0) {
			document.getElementById("timeDisplay").innerHTML
				= "Time Left: <span style='color:black'>" + timeLeft.toFixed(1) + "sec </span>";
				
		} */
		/* if (timeLeft <= 0) {
			document.getElementById("timeDisplay").innerHTML
				= "Time Left: <span style='color:black'>" + timeLeft.toFixed(1) + "sec </span>";
				document.getElementById("startBtn").innerHTML = "Start" 
		}*/
		else {
			// more than 1 min
			var timeLeftMin = Math.floor(timeLeft / 60); 
			var timeLeftSec = Math.floor(timeLeft % 60); 
			document.getElementById("timeDisplay").innerHTML
				= "Time Left: " + timeLeftMin + " min "
								+ timeLeftSec + " sec";
		}
}

		// if (paused) return;
		/*
		
		("Pause") onclick function () {
		paused = true;
	};

		("Resume") onclick, function () {
		paused = false;
	};
	
	*/


 function stopButton() {
	timeLeft = 0;
	paused = true;
	startTimer = false;
	document.getElementById("timeDisplay").innerHTML = "Time Left: <span style='color: black'>0.0 sec</span>"
	document.getElementById("startBtn").value = "Start"
} 
setInterval (updateTimer, 100); // runs update timer 







//var interval = 90;
//var expected = Date.now() + interval;
//setTimeout(step, 1000);
//function step() {

	//interval = interval - 1;
	//document.
//}

