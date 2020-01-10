'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the name of the robot that follows your character  around?',
      answers: [
        'FlapJack',
        'EDI',
        'Claptrap',
        'E2-DR'
      ],
      correctAnswer: 'Claptrap'
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
    }
    {
      question: 'What is the name of the man who helps put the robots eye back into place?',
      answers: [
        'Sir mix a lot',
        'Siracha',
        'Sir Hammerlock',
        'Sir nighteye death'
      ],
      correctAnswer: 'Sir Hammerlock'
    }
    {
      question: 'Where do you farm the easy infinity pistol?',
      answers: [
        'Three horns drive',
        'Sanctuary',
        'Claptraps place',
        'Southern Shelf'
      ],
      correctAnswer: 'Three horns drive'
    }
    {
      question: 'What is the name of the first boss you get to kill in Borderlands 2?',
      answers: [
        'Knuckledragger',
        'Badassarus',
        'Dukinomom',
        'Terramorphus the invincible'
      ],
      correctAnswer: 'Three horns drive'
    }
  ],
  questionNumber: 0,
  score: 0
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

function render(){
  //render the next
  console.log('render is working');
}
function startQuiz(){
  //when button is clicked, the first question view will render 
}
function submitAnswer(){
  //when button is clicked, the results page will render with the correct answer 
  //and current score will be updated
}
function nextQuestion(){
  //when button is clicked, the next question page will render 
}
function restartQuiz(){
  //when button is clicked, start view will render 
}

function main(){
  render();
  startQuiz();
  submitAnswer();
  nextQuestion();
  restartQuiz();
}

$(main);