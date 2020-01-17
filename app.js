'use strict';

/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  //const currentQuestion = STORE.questions[STORE.questionNumber];
  view: 'start',
  questionNumber: 0,
  score: 0,
  questions: [
    {
      question: 'What year did Borderlands 2 come out?',
      answers: [
        '2013',
        '2011',
        '2014',
        '2012'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which one is not a playable character?',
      answers: [
        'Axton',
        'Maya',
        'Zer0',
        'Jeff'
      ],
      correctAnswer: 3
    },
    {
      question: 'What is the name of the man who helps put Claptraps eye back into place?',
      answers: [
        'Sir mix a lot',
        'Siracha',
        'Sir Hammerlock',
        'Sir nighteye death'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which element is most effective on sheilds?',
      answers: [
        'Shock',
        'Incendiary',
        'Explosive',
        'Slag'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is the name of the first boss?',
      answers: [
        'Knuckledragger',
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
  return `<section class="view" id="start">
  <h1>Welcome to the Borderlands 2 Quiz</h1>
  <p>Test your knowledge</p>
  <button id="start">Start</button>
</section>`;
}
function generateQuestionView(){
  return `<section class="view" id="question">
  <h2><span id="questionNumber"></span>/5 <span id="questionString"></span> Score:<span id="score"></span></h2>
  <form action="">
    <div>
      <input type="radio" name="answer" class="radioButton" id="radio0" value="0">
      <label for="radio0" id="label0"></label>
    </div>
    <div>
    <input type="radio" name="answer" class="radioButton" id="radio1" value="1">
    <label for="radio1" id="label1"></label>
    </div>
    <div>
    <input type="radio" name="answer" class="radioButton" id="radio2" value="2">
    <label for="radio2" id="label2"></label>
    </div>
    <div>
    <input type="radio" name="answer" class="radioButton" id="radio3" value="3">
    <label for="radio3" id="label3"></label>
    </div>

    <button>Submit</button>
  </form>
</section>`;
}

function generateCorrectView() {
  return `<section class="view" id="correct">
  <h2>Correct</h2>
  <img src="http://vignette2.wikia.nocookie.net/talesfromtheborderlands/images/7/7e/Thumbsupbot.png/revision/latest?cb=20141126165829" alt="Game character giving a thumbs up">
  <p>Click the next button to continue</p>
  <button type="button" id="next">Next</button>
</section>`;
}

function generateIncorrectView(){
  return `<section class="view" id="incorrect">
  <h2>Sorry, that was wrong</h2>
  <img src="https://vignette.wikia.nocookie.net/villains/images/9/90/Handsome_Jack.png/revision/latest/top-crop/width/360/height/450?cb=20151031140214" alt="Game character with crossed arms">
  <h3>The correct answer was: <span id="correctAnswer"></span></h3>
  <p>Click the next button to continue</p>
  <button type="button" id="next">Next</button>
</section>`;
}

function generateFinalView(){
  return `<section class="view" id="final">
  <h2>Final Score</h2>
  <h3 id="finalScore"></h3>
  <p>Click the restart button to play again</p>
  <button id="restart">Restart</button>
</section>`;
}

function render() {
  if (STORE.view ==='start'){
    const startView = generateStartView();
    $('main').html(startView);
  } else if (STORE.view === 'question') {
    const questionView = generateQuestionView();
    $('main').html(questionView);

    const currentQuestion = STORE.questions[STORE.questionNumber];
    const questionNumber = STORE.questionNumber + 1;
    $('#question #questionString').html(currentQuestion.question);
    $('#label0').html(currentQuestion.answers[0]);
    $('#label1').html(currentQuestion.answers[1]);
    $('#label2').html(currentQuestion.answers[2]);
    $('#label3').html(currentQuestion.answers[3]);
    $('#questionNumber').html(questionNumber);
    $('#score').html(STORE.score);
  } else if (STORE.view === 'correct'){
    const correctView = generateCorrectView();
    $('main').html(correctView);
  } else if (STORE.view === 'incorrect'){
    const incorrectView = generateIncorrectView();
    $('main').html(incorrectView);

    const correctAnswerLocation = STORE.questions[STORE.questionNumber -1];
    const correctIndex = STORE.questions[STORE.questionNumber - 1].correctAnswer;
    $('#correctAnswer').html(correctAnswerLocation.answers[correctIndex]);
  } else if (STORE.view === 'final'){
    const finalView = generateFinalView();
    $('main').html(finalView);
    $('#finalScore').html(STORE.score);
  }
}
function startQuiz() {
  //when button is clicked, the first question view will render 
  $('main').on('click', '#start', event => {
    STORE.view = 'question';
    render();
  });
}
function submitAnswer() {
  //when button is clicked, the results view will render with the correct answer 
  //and current score will be updated
  $('main').on('submit', 'form', event => {
    event.preventDefault();

    const answer = event.target.answer.value;
    const currentQuestion = STORE.questions[STORE.questionNumber];
    if(currentQuestion.correctAnswer == answer){
      STORE.score++;
      STORE.view = 'correct';
    } else {
      STORE.view = 'incorrect';
    }
    STORE.questionNumber ++;
    render();
  });
}
function next() {
  //when button is clicked, the next question view will render or final view if there
  //are more questions
  $('main').on('click', '#next', event => {
    if (STORE.questionNumber < 5){
      STORE.view = 'question';
    } else {
      STORE.view = 'final';
    }
    render();
  });
}

function restartQuiz() {
  //when button is clicked, start view will render 
  $('main').on('click', '#restart', event => {
    STORE.view = 'start';
    STORE.score = 0;
    STORE.questionNumber = 0;
    render();
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
