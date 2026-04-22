//vars
var startTimer = false;
var timeLeft = 0;
const buttonTimer = document.getElementById("srtClickBtn");
const selectItem = document.getElementById("select");
const pauseBtn = document.getElementById("stpClickBtn");
var End = new Audio("Music.mp3");


// start / stop
function srtClickBtn() {
  if (buttonTimer.innerHTML == "STOP") {
    buttonTimer.innerHTML = "START";
    pauseBtn.innerHTML = "PAUSE";
    buttonTimer.style.backgroundColor = "lime";
	pauseBtn.style.backgroundColor = 'lime';
    selectItem.style.display = "block";
	pauseBtn.style.display = "none";
    startTimer = false;

    document.getElementById("minutes").innerHTML = "0m ";
    document.getElementById("seconds").innerHTML = "0s ";
    document.getElementById("milliseconds").innerHTML = "0ms ";

    document.getElementById("minutes").style.color = "white";
    document.getElementById("seconds").style.color = "white";
    document.getElementById("milliseconds").style.color = "white";

    document.getElementById("text1").style.color = "white";
    document.getElementById("text2").style.color = "white";
    document.getElementById("text3").style.color = "white";

    selectOnDisplay();
  } else {
    buttonTimer.innerHTML = "STOP";
    selectItem.style.display = "none";
	pauseBtn.style.display = "block";
    buttonTimer.style.backgroundColor = "#DC143C";
    startTimer = true;
    if (selectItem.value == 1) {
      timeLeft = 180;
    }
    if (selectItem.value == 2) {
      timeLeft = 360;
    }
    if (selectItem.value == 3) {
      timeLeft = 720;
    }
    updateTimer();
  }
}

// pause
function stpClickBtn() {
  if (pauseBtn.innerHTML == "RESUME") {
    pauseBtn.innerHTML = "PAUSE";
	pauseBtn.style.backgroundColor = 'lime';
    startTimer = true;
  } else if (pauseBtn.innerHTML == "PAUSE" && buttonTimer.innerHTML == "STOP") {
    pauseBtn.innerHTML = "RESUME";
	pauseBtn.style.backgroundColor = 'cyan';
    startTimer = false;
  }
}

// Timer
function updateTimer() {
  if (startTimer == true) {
    var minNum = Math.floor(timeLeft / 60),
      secNum = Math.floor(timeLeft % 60),
      millNum = Math.floor((timeLeft * 100) % 100);

    document.getElementById("minutes").innerHTML = minNum + "m ";
    document.getElementById("seconds").innerHTML = secNum + "s ";
    document.getElementById("milliseconds").innerHTML = millNum + "ms ";

    if (timeLeft > 0.01) {
      timeLeft = timeLeft - 0.01;
      if (timeLeft <= 60) {
        document.getElementById("minutes").style.color = "red";
        document.getElementById("seconds").style.color = "red";
        document.getElementById("milliseconds").style.color = "red";

        document.getElementById("text1").style.color = "red";
        document.getElementById("text2").style.color = "red";
        document.getElementById("text3").style.color = "red";
      }
    } else {
      timeLeft = 0;
      startTimer = false;
      buttonTimer.innerHTML = "START";
      pauseBtn.style.animationDuration = "0s";
      buttonTimer.style.backgroundColor = "lime";
      selectItem.style.display = "block";
	  pauseBtn.style.display = "none";
      End.play();

      document.getElementById("minutes").style.color = "white";
      document.getElementById("seconds").style.color = "white";
      document.getElementById("milliseconds").style.color = "white";

      document.getElementById("text1").style.color = "white";
      document.getElementById("text2").style.color = "white";
      document.getElementById("text3").style.color = "white";

      setTimeout(function () {
        selectOnDisplay();
      }, 2000);
    }
  }
}
setInterval(updateTimer, 10);

/*$(window).blur(function() {
	
});
*/


function selectOnDisplay() {
  if (startTimer == false) {
    if (selectItem.value == 1) {
      document.getElementById("minutes").innerHTML = "3m ";
      document.getElementById("seconds").innerHTML = "0s ";
      document.getElementById("milliseconds").innerHTML = "0ms ";
    }
    if (selectItem.value == 2) {
      document.getElementById("minutes").innerHTML = "6m ";
      document.getElementById("seconds").innerHTML = "0s ";
      document.getElementById("milliseconds").innerHTML = "0ms ";
    }
    if (selectItem.value == 3) {
      document.getElementById("minutes").innerHTML = "12m ";
      document.getElementById("seconds").innerHTML = "0s ";
      document.getElementById("milliseconds").innerHTML = "0ms ";
    }
  }
}


/*You download jQuery from here (right click save as then save the file to your project)
https://code.jquery.com/jquery-3.6.0.min.js

Then you go into your HTML and make the first script tag load up jQuery from where ever you save it to your project
then all script tags after that you just use the global $ function to then start using jQuery 
 */