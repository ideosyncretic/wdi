
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


// player has 10 guesses, each comprises 4-pin sequence.

var guesses = [];
var currentGuess = [];
var currentPinNumber = 0;
var currentGuessNumber = 0;
var guessChecked = false;

$(function() {

function playerGuess() {
  $(".picker").click(function() {
    if ( (currentGuess.length < 4 && (currentPinNumber < 40)) ) {
      currentGuess.push($(this).attr("class").split(" ")[0])
      $("div.guess > button").eq(currentPinNumber).addClass($(this).attr("class").split(" ")[0])
      console.log("currentGuess (" + currentGuess.length + ") " + currentGuess)
      currentPinNumber++;
    }
  })

};


playerGuess();

// should clear individual pin in current guess.

function clearGuess() {
  $("#clear").click( function() {
    if (currentGuess.length !== 0) {
    $("div.guess > button").eq(currentPinNumber-1).removeClass()
    currentPinNumber -= 1;
    currentGuess.pop();
    console.log("currentGuess (" + currentGuess.length + ") " + currentGuess)
    }
  })
};

clearGuess();


function checkGuess() {
  $("#check").click(function() {
    if (currentGuess.length === 4) {
      guesses.push([currentGuess])
      console.log("Guesses = " + guesses)
      currentGuess = [];
    }
  })
}

checkGuess();

// generate key pins: white for correct color, and black for correct position + correct color. singular instances only, whereupon each player guess correspond with a secret pin.


function gameOver() {
  if (guesses.length === 10) {
    return true
  }
  return false;
};

});// end code
