

//global variables
var startTimer = false;
var timeLeft = 100;
var End = new Audio ("music.mp3");
const consistency = document.getElementById('consistency');
function startButton() {
//var consistency = value of id = "consistency" {soft, medium, hard}
	if (startTimer == false) {
	startTimer = true;
	if (consistency.value == 1) {
		timeLeft = 180;
	}
	if (consistency.value == 2) {
		timeLeft = 360;
	}
	if (consistency.value == 3) {
		timeLeft = 720;
	}
	 //change later depending on consistency, soft:180 360 720
	document.getElementById("startBtn").value = "Stop (reset)";
	}
	else {
	startTimer = false;
	document.getElementById("startBtn").value = "Start";
	document.getElementById('timeDisplay').innerHTML = 'Time left: 0.0';// this will reset timer
	}
}


function updateTimer() {
	var color;
	if (startTimer == true) {
		if (timeLeft <= 60) {
		color = "red";
		document.getElementById("timeDisplay").innerHTML
			= '<span style="color:' + color + ';">' + "Time left: " + timeLeft.toFixed(1) + " sec" + '</span>';
			}
		else {
			var timeLeftMin = Math.floor(timeLeft / 60);
			var timeLeftSec = Math.floor(timeLeft % 60);
			document.getElementById("timeDisplay").innerHTML
			= "Time left: " + timeLeftMin + " min " +  timeLeftSec + " sec";
			}
			
		//help why isnt the last 0.1 sec going down HELP
		if (timeLeft > 0.1) {
			timeLeft = timeLeft - 0.1; //0.1 sec removed 
		}
			


		else {
			timeLeft = 0;
			document.getElementById("timeDisplay").innerHTML
			= '<span style="color:' + color + ';">' + "Time left: " + timeLeft.toFixed(1) + " sec" + '</span>';
			startTimer = false; 
			End.play();
			document.getElementById('startBtn').value = 'Start';
		}
	}  
		
}
	


setInterval (updateTimer, 100); //run updateTimer every 0.1 second


