
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

var guesses = []; // array of checked guesses
var currentGuess = [];
var currentPinNumber = 0;
var currentKey = 0;
var guessKeysQuantity = 0;

$(function() {

function playerGuess() {
  $(".picker").click(function() {
    if ( (currentGuess.length < 4 && (currentPinNumber < 40)) ) {
      currentGuess.push($(this).attr("class").split(" ")[0])
      $("div.guess > button").eq(currentPinNumber).addClass($(this).attr("class").split(" ")[0])
      // console.log("currentGuess (" + currentGuess.length + ") " + currentGuess)
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
    // console.log("currentGuess (" + currentGuess.length + ") " + currentGuess)
    }
  })
};

clearGuess();


function checkGuess() {
  $("#check").click(function() {
    var tempAnswer = answer;
    if (currentGuess.length === 4) {
      $("h3").text("⟠")
      guesses.push([currentGuess])
      console.log("Checked: " + currentGuess)

      // show clue keys

      // RED KEYS: matching position AND colour
      for (var i = 0; i < currentGuess.length; i++) {
        if (currentGuess[i] === tempAnswer[i]) {
          $("div.key").eq(currentKey).addClass("red")
          console.log("(key: red) " + tempAnswer[i])
          delete tempAnswer[i];
          currentKey++;
          guessKeysQuantity++;
        }
      } // end for loop (RED keys)

      // WHITE KEYS: matching colour
      for (var i = 0; i < currentGuess.length; i++) {
        if (tempAnswer.indexOf(currentGuess[i]) !== -1) {
          $("div.key").eq(currentKey).addClass("white")
          console.log("(key: white) " + tempAnswer[tempAnswer.indexOf(currentGuess[i])])
          delete tempAnswer[tempAnswer.indexOf(currentGuess[i])]
          currentKey++;
          guessKeysQuantity++;
        }
      } // end for loop (WHITE keys)

      // skip over empty keys
      if (guessKeysQuantity) {
      currentKey += (4 - guessKeysQuantity);
      }
      else if (!guessKeysQuantity){
      currentKey += 4;
      }
      
      // repopulate tempAnswer for next check
      tempAnswer = answer;
    }
    else {
      $("h3").text("❝please complete your guess❞")
    }
    currentGuess = [];
    console.log("tempAnswer " + tempAnswer);
  })
}

checkGuess();

// generate key pins: white for correct color, and red for correct position + correct color. singular instances only, whereupon each player guess correspond with a secret pin.


function gameOver() {
  if (guesses.length === 10) {
    return true
  }
  return false;
};

});// end code
