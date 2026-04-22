function finish () {
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;
	
		if (question1=="Steve Jobs") {
			correct++;
		}
		
		if (question2=="2007") {
			correct++;
		}
		
		if (question3=="2") {
			correct++;
		}
		
		if (question4=="22") {
			correct++;
		}
		
		if (question5=="2,226.92 B") {
			correct++;
		}
		
		var messages = ["Great job!", "That's just okay","You really need to do better"];

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
