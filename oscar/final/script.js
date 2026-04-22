function finish () {
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;
	
		if (question1=="8") {
			correct++;
		}
		
		if (question2=="Dayton Beach, Florida") {
			correct++;
		}
		
		if (question3=="Golden State Warriors") {
			correct++;
		}
		
		if (question4=="5th Overall") {
			correct++;
		}
		
		if (question5=="8") {
			correct++;
		}
		
		var messages = ["Great jobpppppppppppppppppp", "You did alright","Work Harder"];

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