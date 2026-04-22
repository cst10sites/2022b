// global variables
var startTimer = false;
var timeLeft = 0;
var sOption = document.getElementById('consistency');
var srtBtn = document.getElementById('startBtn');
var p = true;
var snd1 = new Audio('Alarm-Fast-High-Pitch-A1-www.fesliyanstudios.com.mp3');
function startButton() {
	// var consistency - value of id = "consistency" {soft,	medium, hard}
	// start case:
	if (startTimer == false && p == true) {
		startTimer = true;
		p = false;
		srtBtn.value = 'Pause';
		if (sOption.value == 1) {
			timeLeft = 180;
		}
		if (sOption.value == 2) {
			timeLeft = 360;
		}
		if (sOption.value == 3) {
			timeLeft = 720;
		}
	}
	// pause case:
	else if (startTimer == true && p == false) {
		p = true;
		srtBtn.value = 'Resume';
	}
	// resume case:
	else if (startTimer == true && p == true) {
		p = false;
		srtBtn.value = 'Pause';
	}
}
	function stopButton() { 
	document.getElementById('timeDisplay').innerHTML = 'Time Left: 0.0';
	startTimer = false;
	srtBtn.value = 'Start';
	p = true;
	document.getElementById("timeDisplay").style.color = 'black';
	}



function updateTimer() {
	// console.log(startTimer)
	// console.log(p)
	if (startTimer == true && p == false) {
		document.getElementById("timeDisplay").innerHTML 
			= "Time Left:" + timeLeft.toFixed(1) + "sec";
		if (timeLeft > 0.1) {
			timeLeft = timeLeft - 0.1; // 0.1 seconds reduced from timeLeft
		
		if (timeLeft <= 60) {
		document.getElementById("timeDisplay").style.color = 'red';
		console.log('ttttt');
		}}
	
		else { 
			timeLeft = 0;
			startTimer = false;
			document.getElementById("timeDisplay").style.color = 'black';
			srtBtn.value = 'Start';
			p = true;
			snd1.play();
		}
		
	}
}
setInterval(updateTimer, 100);
	
	
	
	
	
/* if (OceanArm == true) {
	puchSam = true;
}	

else {
	puchSam = false;
}
*/