// This is the old code (does not do anything):
/*var startTime = new Date();

function checkEgg() {
    var chosenEgg = document.getElementById("eggValue").value;
	startTime = new Date();
	
	setInterval(autoUpdateTime, 100);

    document.getElementById("start").value = "pause"
	
}

function autoUpdateTime() {					
	
	var currentTime = new Date();				
	var elapsedTime = (currentTime - startTime) / 1000;	
	var remainTime = document.getElementById("eggValue").value - elapsedTime
	if (remainTime >= 0)	{
		document.getElementById("eggDisplay").innerHTML = remainTime;
	} else {
		document.getElementById("eggDisplay").innerHTML = "yo eggy is done";
		var remainTime = document.getElementById("eggValue").value
	}
	
			
}
*/











var startTime = false;
var timeLeft = 0;
var a = 0;

function checkEgg()	{

	
	if (startTime == false)	{
		timeLeft = a + document.getElementById("eggValue").value; //change depending on consitency
		startTime = true;
		document.getElementById("startBTN").value = "Stop";
	}
	else {
		startTime = false;
		document.getElementById("startBTN").value = "Start";
		
	}

}

function updateTimer()	{
	var color;
	if (startTime == true)	{
		if (timeLeft > 0.1)	{
		timeLeft = timeLeft - 0.1;
		a = timeLeft;
		}
	
		else {
			timeLeft = 0;
			startTime = false;
			document.getElementById("timeDisplay").innerHTML = 'Yo eggy is spaghetti ready!';
			var myAudio = new Audio('buzzer.mp3');
				myAudio.play();
		}
		if (startTime == true)	{
		if (timeLeft <= 60)	{
			color = "red"; 
			document.getElementById("timeDisplay").innerHTML
				
				= '<span style="color:' + color + ';">' + "Time Left " + timeLeft.toFixed() + "secs" + '</span>';
				
		
		}

		else {
			color = "chartreuse";
			var timeLeftMin = Math.floor (timeLeft / 60);
			var timeLeftSec = Math.floor (timeLeft % 60);
			document.getElementById("timeDisplay").innerHTML = '<span style="color:' + color + ';">' + "Time Left " + timeLeftMin + " Min " + "and " + timeLeftSec + " secs" + '</span>';
		}
	} else {
	
		if (startTime = false)	{
			timeLeft = 0;
		}
			
	}
	}
}

setInterval (updateTimer,100)



function resetTimer ()	{
	document.getElementById("timeDisplay").innerHTML = ""
	
}


