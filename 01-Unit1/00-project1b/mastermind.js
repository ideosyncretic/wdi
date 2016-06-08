
// generate random sequence of 4 colored pins.
answer = [];

function generateAnswer() {
  var pin;
  var randomNumber;
  for (var i = 0; i < 4; i++) {
    randomNumber = Math.random();
    if (randomNumber < 0.25) {
      pin = "blue"
    };
    if (randomNumber > 0.25) {
      pin = "red"
    };
    if (randomNumber > 0.5) {
      pin = "yellow"
    };
    if (randomNumber > 0.75 ) {
      pin = "green"
    };
    answer.push(pin)
    }
}

generateAnswer();
console.log(answer);


// generate key pins: white for correct color, and black for correct position + correct color. singular instances only, whereupon each player guess correspond with a secret pin.


// player has 12 guesses. each guess comprises 4-pin sequence.

var guesses = [];
var guess = [];
var currentPin = 0;
var completeGuess = false;
var totalGuesses = 0;

$(function() {

function playerGuess() {
  $(".picker").click(function() {
    if ( (guess.length < 4) && (currentPin < 40) ) {
      guess.push($(this).attr("class").split(" ")[0])
      $("button").eq(currentPin).addClass($(this).attr("class").split(" ")[0])
      console.log("Guess = " + guess)
      currentPin++;
      completeGuess = false;
    }
    if (guess.length === 4) {
      guesses.push([guess])
      console.log("Guesses = " + guesses)
      guess = [];
      completeGuess = true;
      totalGuesses += 1;
      console.log("New complete guess! Total = " + totalGuesses)
    }
  })
};

function gameOver() {
  if (guesses.length === 10) {
    return true
  }
  return false;
};

playerGuess();

function clearGuess() {
  $("#clear").click( function() {
    if (completeGuess) {
      for (var i = 0; i < 4; i++) {
        $("button").eq(currentPin-1).removeClass()
        currentPin -= 1;
      }
    completeGuess = false;
    totalGuesses -= 1;
    console.log("clearGuess ran, total = " + totalGuesses);
    }
  })
};

clearGuess();

});// end code
