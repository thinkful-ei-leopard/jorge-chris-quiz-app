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
        'This'
      ],
      correctAnswer: 3
    },
    {
      question: 'What is the name of the man who helps put the robots eye back into place?',
      answers: [
        'Sir mix a lot',
        'Siracha',
        'This',
        'Sir nighteye death'
      ],
      correctAnswer: 2
    },
    {
      question: 'Where do you farm the easy infinity pistol?',
      answers: [
        'This',
        'Sanctuary',
        'Claptraps place',
        'Southern Shelf'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is the name of the first boss you get to kill in Borderlands 2?',
      answers: [
        'This',
        'Badassarus',
        'Dukinomom',
        'Terramorphus the invincible'
      ],
      correctAnswer: 0
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

function generateStartView(){
  return `<section class="page" id="start">
  <button id="start">Start</button>
</section>`;
}
function generateQuestionView(){
  return `<section class="page" id="question">
  <form action="">
    <h2></h2>
    <label for="radio0" id="label0"></label>
    <input type="radio" name="answer" id="radio0" value="0">
    <label for="radio1" id="label1"></label>
    <input type="radio" name="answer" id="radio1" value="1">
    <label for="radio2" id="label2"></label>
    <input type="radio" name="answer" id="radio2" value="2">
    <label for="radio3" id="label3"></label>
    <input type="radio" name="answer" id="radio3" value="3">

    <button>Enter</button>
  </form>
</section>`;
}

function generateCorrectView() {
  return `<div>
  <h1>Correct</h1>
  <img src="http://vignette2.wikia.nocookie.net/talesfromtheborderlands/images/7/7e/Thumbsupbot.png/revision/latest?cb=20141126165829" alt="Thumbs up image">
  <button type="button" id="next">Next</button>
</div>`;
}

function generateIncorrectView(){
  return `<section class="page" id="incorrect">
  <button type="button" id="next">Next</button>
</section>`;
}

function generateFinalView(){
  return `<section class="page" id="final">
  <button id="restart">Restart</button>
</section>`;
}

function render() {
  console.log('render is working');
  console.log(`Current question index is ${STORE.questionNumber}`);
  console.log(`Current question score is ${STORE.score}`);

  if (STORE.page ==='start'){
    const startView = generateStartView();
    $('main').html(startView);
  } else if (STORE.page === 'question') {
    const questionView = generateQuestionView();
    $('main').html(questionView);

    const currentQuestion = STORE.questions[STORE.questionNumber];
    $('#question h2').text(currentQuestion.question);
    $('#label0').text(currentQuestion.answers[0]);
    $('#label1').text(currentQuestion.answers[1]);
    $('#label2').text(currentQuestion.answers[2]);
    $('#label3').text(currentQuestion.answers[3]);
  } else if (STORE.page === 'correct'){
    const correctView = generateCorrectView();
    $('main').html(correctView);
  } else if (STORE.page === 'incorrect'){
    const incorrectView = generateIncorrectView();
    $('main').html(incorrectView);
  } else if (STORE.page === 'final'){
    const finalView = generateFinalView();
    $('main').html(finalView);
  }
}
function startQuiz() {
  //when button is clicked, the first question view will render 
  $('main').on('click', '#start', event => {
    STORE.page = 'question';
    render();
    console.log ('start button working');
  });
}
function submitAnswer() {
  //when button is clicked, the results page will render with the correct answer 
  //and current score will be updated
  $('main').on('submit', 'form', event => {
    event.preventDefault();
    const answer = event.target.answer.value;
    const currentQuestion = STORE.questions[STORE.questionNumber];
    if(currentQuestion.correctAnswer == answer){
      STORE.score++;
      STORE.page = 'correct';
    } else {
      STORE.page = 'incorrect';
    }
    STORE.questionNumber ++;
    render();
    console.log ('submit button working');
    return false;
  });
}
function next() {
  //when button is clicked, the next question page will render 
  $('main').on('click', '#next', event => {
    if (STORE.questionNumber < 5){
      STORE.page = 'question';
    } else {
      STORE.page = 'final';
    }
    render();
    console.log ('next button working');
  });
}
function restartQuiz() {
  //when button is clicked, start view will render 
  $('main').on('click', '#restart', event => {
    STORE.page = 'start';
    STORE.score = 0;
    STORE.questionNumber = 0;
    render();
    console.log ('restart button working');
  });
}

function main() {
  render();
  startQuiz();
  submitAnswer();
  next();
  restartQuiz();
}

$(main);