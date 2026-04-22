(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = '#33ffff';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "How old is The Weeknd?",
      answers: {
        a: "46",
        b: "27",
        c: "32"
      },
      correctAnswer: "c"
    },
    {
      question: "The Weeknd is Canadian",
      answers: {
        a: "False",
        b: "True",
      },
      correctAnswer: "b"
    },
	{
      question: "Where in Canada is he from?",
      answers: {
        a: "Vancouver",
        b: "Toronto",
		c: "Ottawa",
		d: "Quebec City",
      },
      correctAnswer: "b"
    },
	{
      question: "The Weeknd is...",
      answers: {
        a: "a singer",
        b: "an actor",
        c: "the president"
      },
      correctAnswer: "a"
    },
	{
      question: "Whats his real name?",
      answers: {
        a: "Shéyaa Bin Abraham-Joseph",
        b: "Abel Makkonen Tesfaye",
        c: "Jonathan Lyndale Kirk"
      },
      correctAnswer: "b"
    },
	{
      question: "Name one of his albums",
      answers: {
        a: "Top",
        b: "What It Means To Be King",
        c: "Beauty Behind the Madness"
      },
      correctAnswer: "c"
    },
	{
      question: "How many siblings does The Weeknd have?",
      answers: {
        a: "0",
        b: "1",
        c: "2",
        d: "5"
      },
      correctAnswer: "a"
    },
	{
      question: "Whats The Weeknds favourite food?",
      answers: {
        a: "BBQ",
        b: "Burgers",
        c: "Pasta and icecream"
      },
      correctAnswer: "c"
	 },
	 {
      question: "When is his next concert in Vancouver?",
      answers: {
        a: "Jul 15th 2022",
        b: "Aug 23rd 2024",
        c: "Aug 23rd 2022"
      },
      correctAnswer: "c"
	 },
	 {
      question: "Whats The Weeknds most played song on spotify?",
      answers: {
        a: "Blinding Lights",
        b: "Starboy",
        c: "In The Night",
		d: "Die For You"
      },
      correctAnswer: "a"
	 }
	 
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
