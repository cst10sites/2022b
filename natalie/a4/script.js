var nClicks = 0;
var timeRemaining = 0;
var colour = 'lightgrey';
var minRemaining = 0;
var secRemaining = 0;
var boowomp = 0;

function eggHard() {
	if (nClicks == 0) {
		timeRemaining = 720;
		boowomp = 1;
	}
}

function eggMedium() {
	if (nClicks == 0) {
		timeRemaining = 360;
		boowomp = 1;
	}
}

function eggSoft() {
	if (nClicks == 0) {
		timeRemaining = 180;
		boowomp = 1;
	}
}

function reset() {
	nClicks = 0;
	document.getElementById("main").innerHTML = "Start";
	timeRemaining = 0;
	boowomp = 0;
}

function button1() {

	if (nClicks == 0) {
	nClicks = 1;
	document.getElementById("main").innerHTML = "Pause";
	}
	else {
	nClicks = 0;
	document.getElementById("main").innerHTML = "Start";
	}
}

setInterval(autoUpdateTime, 1000);

function autoUpdateTime() {
	var colour;
	if (nClicks == 1) {
		if (timeRemaining > 0) {
			timeRemaining = (timeRemaining - 1);
		}
	}
	if (timeRemaining < 60) {
		colour = "red";
		document.getElementById("timeDisplayed").innerHTML = '<span style="color:' + colour + ';">' + timeRemaining + ' seconds remaining' + '</span>';
	}
	else {
		colour = "lightgrey";
		minRemaining = Math.floor (timeRemaining / 60)
		secRemaining = Math.floor (timeRemaining % 60)
		document.getElementById("timeDisplayed").innerHTML = '<span style="color:' + colour + ';">' + minRemaining + ' minutes and ' + secRemaining + ' seconds remaining' +'</span>';
	}
	
	
	if (timeRemaining == 0) {
		document.getElementById("timeDisplayed").innerHTML = '0 seconds remaining';
		if (boowomp == 1) {
			var myAudio = new Audio('boowomp.mp3');
			myAudio.play();
			boowomp = 0;
		}
	}
	
}





