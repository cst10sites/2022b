function finish () {
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;
	
		if (question1=="7") {
			correct++;
		}
		
		if (question2=="Age 13") {
			correct++;
		}
		
		if (question3=="21 years") {
			correct++;
		}
		
		if (question4=="Diego Maradona") {
			correct++;
		}
		
		if (question5=="PSG") {
			correct++;
		}
		
		var messages = ["Well Done", "You did ok","You suck"];

var range;
	if (correct < 3){
		range = 2;	
	}
	
	if (correct > 2 && correct < 4){
		range = 1;	
	}
	
	if (correct > 3){
		range = 0;	
	}

	document.getElementById('message').innerHTML = messages[range];

		document.getElementById('afterSubmit').style.visibility = 'visible';
	document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";
}