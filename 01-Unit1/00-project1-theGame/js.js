$(function() {


console.log("jq loaded");

var questions = [
  "blue", "yellow", "grey", "green", "orange", "purple", "black", "pink", "red", "blue"
]

var answers = [
  "orange", "blue", "yellow", "pink", "green", "red", "purple", "grey", "red", "black"
]

 // stores answers in alternate. distinguish by modulo % === 2.
var playersAnswers = new Array(10);

//It should return an integer that is the number of questions in a game
function numberOfQuestions() {
  return questions.length;
}


//It should return an integer that is the zero-based index of the current question in the quiz

function currentQuestion(index) {
  return questions[index];
}

//It should return an integer that is the zero-based index the correct answer for the currrent question

function correctAnswer(index) {
  if (questions[index] === 0) {return 3}; // Q1


}

//It should return an integer that is the number of choices for the current question

function numberOfAnswers() {
  answers
}

//It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.

function playTurn(choice) {

}

//It should return a true or false if the quiz is over.
function isGameOver() {

}

//It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.

function whoWon() {

}

function restart() {

}


}); // end code. do not remove
