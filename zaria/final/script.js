var correct = 0;

function check() {
	if (question1.checked == true) {
		correct++;
		document.getElementById("question1Check").innerHTML = "<span style='color:green;'>You are correct! The fishing cat is currently found in South and Southeast Asia.</span>";
    }
	else{
		document.getElementById("question1Check").innerHTML = "<span style='color:red;'>Incorrect, let's try again!</span>";
	}

	if (question2.checked == true) {
		correct++;
		document.getElementById("question2Check").innerHTML = "<span style='color:green;'>You are correct! The fishing cat often finds food at night!</span>";
    }
	else{
		document.getElementById("question2Check").innerHTML = "<span style='color:red;'>Incorrect, let's try again!</span>";
	}
	
	if (question3.checked == true) {
		correct++;
		document.getElementById("question3Check").innerHTML = "<span style='color:green;'>You are correct! The fishing cat can eat fish, small mammals and birds!</span>";
    }
	else{
		document.getElementById("question3Check").innerHTML = "<span style='color:red;'>Incorrect, let's try again!</span>";
	}
	
	if (question4.checked == true) {
		correct++;
		document.getElementById("question4Check").innerHTML = "<span style='color:green;'>You are correct! The fishing cat's major threat is the destruction of wetlands!</span>";
    }
	else{
		document.getElementById("question4Check").innerHTML = "<span style='color:red;'>Incorrect, let's try again!</span>";
	}
	
	if (question5.checked == true) {
		correct++;
		document.getElementById("question5Check").innerHTML = "<span style='color:green;'>You are correct! The fishing cat's conservation status is endangered!</span>";
    }
	else{
		document.getElementById("question5Check").innerHTML = "<span style='color:red;'>Incorrect, let's try again!</span>";
	}
	
	if (question6.checked == true) {
		correct++;
		document.getElementById("question6Check").innerHTML = "<span style='color:green;'>You are correct! The Fishing Cat Month is February!</span>";
    }
	else{
		document.getElementById("question6Check").innerHTML = "<span style='color:red;'>Incorrect, let's try again!</span>";
	}
	
	if (question7.checked == true) {
		correct++;
		document.getElementById("question7Check").innerHTML = "<span style='color:green;'>You are correct! Tthe first fishing cat's synonym, Felis viverrinus, is proposed in 1833!</span>";
    }
	else{
		document.getElementById("question7Check").innerHTML = "<span style='color:red;'>Incorrect, let's try again!</span>";
	}
	
	if (question8.checked == true) {
		correct++;
		document.getElementById("question8Check").innerHTML = "<span style='color:green;'>You are correct! The fishing cat cathes fish by scooping with its paws!</span>";
    }
	else{
		document.getElementById("question8Check").innerHTML = "<span style='color:red;'>Incorrect, let's try again!</span>";
	}
	
	//correct and quiz message 
	if (correct > 6) {
		document.getElementById("quizMessage").innerHTML = "Amazing!";
	}
	else if (correct > 3 & correct < 7) {
		document.getElementById("quizMessage").innerHTML = "It is good!";
	}
	else {
		document.getElementById("quizMessage").innerHTML = "You can do better.";
	}

	document.getElementById("correct").innerHTML = "You got " + correct +" correct!";
	
	correct = 0;
}

function restart(){
	document.getElementById("quiz").reset();
	correct = 0; 
	document.getElementById("correct").innerHTML = ""; 
	document.getElementById("quizMessage").innerHTML = ""; 
	document.getElementById("question1Check").innerHTML = "";
	document.getElementById("question2Check").innerHTML = "";
	document.getElementById("question3Check").innerHTML = "";
	document.getElementById("question4Check").innerHTML = "";
	document.getElementById("question5Check").innerHTML = "";
	document.getElementById("question6Check").innerHTML = "";
	document.getElementById("question7Check").innerHTML = "";
	document.getElementById("question8Check").innerHTML = "";
}