// global variables: can be accessed in functions
var startTime = new Date(); 
var nClicks = 0;


// updateStopWatch():
// 1) If nClicks = 0, reset startTime and change label to Lap;
     // otherwise, calculate and print timeElapsed.
// 2) Increase nClicks by 1

function updateStopWatch() {
	document.getElementById("lap").innerHTML = "Lap";
	if (nClicks == 0) {
		startTime = new Date();					// update global variable (no var)
	}
	else {
		var currentTime = new Date();				// local variable: can only be read inside the else block
		var elapsedTime = (currentTime - startTime) / 1000;	// time in seconds
		document.getElementById("timeElapsed").innerHTML = 
			"Lap " + nClicks + " - " + elapsedTime + "s" +
			"<br>" + document.getElementById("timeElapsed").innerHTML;
	}
	nClicks = nClicks + 1;
}

// resetStopWatch(): 
// 1) Change label back to "Start"
// 2) Remove all prinouts
// 3) Reset nClicks = 0.

function resetStopWatch() {
	document.getElementById("lap").innerHTML = "Start";
	document.getElementById("timeElapsed").innerHTML = "";
	document.getElementById("timeDisplayed").innerHTML = "";	// comment out to keep stop time
	nClicks = 0;
}


// autoUpdateTime(): always run because of setInterval but only show when nClicks > 0.
// 1) Pick a random number between 0 and 1
// 2) Set color variable based on random number
// 3) Change CSS and display timeElapsed


setInterval(autoUpdateTime, 100); // run a function repeatedly each 0.1 s

function autoUpdateTime() {
	if (nClicks > 0) {
		var currentTime = new Date();
		var elapsedTime = (currentTime - startTime) / 1000;

		var rN= Math.random(); // random number: decimal between 0 and 1
		var color;
		
		// randomly assign color
		if (rN < 0.25) {
			color = "red";    	// red if rN between 0 and 0.25
		}
		else if (rN < 0.50) {
			color = "blue";  	// blue if rN between 0.25 and 0.50
		}
		else if (rN < 0.50) {
			color = "yellow";	// yellow if rN between 0.50 and 0.75
		}
		else {
			color = "green";	// green if rN between 0.75 and 1
		}
		
		document.getElementById("timeDisplayed").innerHTML = 
			'<span style="color:' + color + ';">' + elapsedTime + '</span>';
		
	}
}






