'use strict';

/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  page: 'start',
  questionNumber: 0,
  score: 0,
  questions: [
    {
      question: 'What is the name of the robot that follows your character  around?',
      answers: [
        'FlapJack',
        'EDI',
        'Claptrap',
        'E2-DR'
      ],
      correctAnswer: 2
    },
    {
      question: 'Where can you get a double penetrating unkempt harold weapon ?',
      answers: [
        'Sanctuary',
        'Claptraps place',
        'Southern shelf',
        'Three horns divide'
      ],
      correctAnswer: 'Three horns divide'
    },
    {
      question: 'What is the name of the man who helps put the robots eye back into place?',
      answers: [
        'Sir mix a lot',
        'Siracha',
        'Sir Hammerlock',
        'Sir nighteye death'
      ],
      correctAnswer: 'Sir Hammerlock'
    },
    {
      question: 'Where do you farm the easy infinity pistol?',
      answers: [
        'Three horns drive',
        'Sanctuary',
        'Claptraps place',
        'Southern Shelf'
      ],
      correctAnswer: 'Three horns drive'
    },
    {
      question: 'What is the name of the first boss you get to kill in Borderlands 2?',
      answers: [
        'Knuckledragger',
        'Badassarus',
        'Dukinomom',
        'Terramorphus the invincible'
      ],
      correctAnswer: 'Three horns drive'
    },
  ],
};

/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */

/*function generateStartView(){
  return;
}

function generateQuestionView(){
  return;
}*/

function generateCorrectView() {
  return `<div>
  <h1>Correct</h1>
  <img src="http://vignette2.wikia.nocookie.net/talesfromtheborderlands/images/7/7e/Thumbsupbot.png/revision/latest?cb=20141126165829" alt="Thumbs up image">
  <button type="button" id="next">Next</button>
</div>`;
}

/*function generateIncorrectView(){
  return;
}

function generateFinalView(){
  return;
}

}*/

function render() {
  console.log('render is working');

  //$('main').html(generateStartView());

  //const answerString = extractAnswerString(store);
  //const correctAnswer = extractCorrectAnswerString(store);

  //if(answerString === correctAnswer){
  //$('main').html(generateCorrectView());
  //} else {
  //$('main').html(generateIncorrectView());
  //}
  $('.page').hide()
  $('#' + STORE.page).show()
  if (STORE.page === 'question') {
    const currentQuestion = STORE.questions[STORE.questionNumber];
    $('#question h2').text(currentQuestion.question);
    $('#label0').text(currentQuestion.answers[0]);
    $('#label1').text(currentQuestion.answers[1]);
    $('#label2').text(currentQuestion.answers[2]);
    $('#label3').text(currentQuestion.answers[3]);
  } else if (STORE.page === 'incorrect') {

  } else if (STORE.page === 'final') {

  }
}
function startQuiz() {
  //when button is clicked, the first question view will render 
  $('#start button').click(event => {
    STORE.page = 'question';
    render();
  });
}
function submitAnswer() {
  //when button is clicked, the results page will render with the correct answer 
  //and current score will be updated
  $('form').submit(event => {
    event.preventDefault()
    const answer = event.target.answer.value
    const currentQuestion = STORE.questions[STORE.questionNumber];
    if(currentQuestion.correctAnswer == answer){
      STORE.score++
      STORE.page = 'correct';
    } else {
      STORE.page = 'incorrect';
    }
    render();
  });
}
function nextQuestion() {
  //when button is clicked, the next question page will render 
}
function restartQuiz() {
  //when button is clicked, start view will render 
}

function main() {
  render();
  startQuiz();
  submitAnswer();
  nextQuestion();
  restartQuiz();
}

$(main);