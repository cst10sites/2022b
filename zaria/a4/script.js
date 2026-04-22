var startTimer = false;
var timeLeft = 0;
var myAudio = new Audio('bgmusic.mp3');
var pause = false;

function startButton() {
	var consistency = document.getElementById("consistency").value;
	if(startTimer == false && pause == false) {
		if (consistency == "Soft"){
			timeLeft = 180; 
		}
		
		else if (consistency == "Medium"){
			timeLeft = 360; 
		} 
		else {
			timeLeft = 720; 
		} 
		
		startTimer = true;
		document.getElementById("StartButton").value = "Stop";
	}
	else if (pause == false) { 
		pause = true;
		document.getElementById("StartButton").value = "Start";
	}
	else {
		pause = false;
		document.getElementById("StartButton").value = "Stop";
	}
}

function updateTimer() {
	if (startTimer == true && pause == false) {
		if (timeLeft > 0.1) {
			timeLeft = timeLeft - 0.1;
		}
		else {
			document.getElementById("StartButton").value = "Start";
			timeLeft = 0;
			startTimer = false; 
			pasue = false;
			myAudio.play();
		}
		if (timeLeft <= 60){
			document.getElementById("timeDisplayed").innerHTML = "Time Left: <span style='color:red;'> " + timeLeft.toFixed(1) + "sec</span>"; 
		}
		else {
			var timeLeftMin = Math.floor(timeLeft / 60);
			var timeLeftSec = Math.floor(timeLeft - 60*timeLeftMin);
			document.getElementById("timeDisplayed").innerHTML = " Time Left:" + timeLeftMin+ "min"	+ timeLeftSec + "sec"; 
		}
	}
	
}
setInterval(updateTimer,100);

function stopMusic(){
	myAudio.pause();
}


function resetButton() {
	document.getElementById("StartButton").value = "Start";
	document.getElementById("timeDisplayed").innerHTML = "Time left: 0.0 sec";
	startTimer = false;
	pause = false; 
	timeLeft= 0 ;
	myAudio.pause();
}