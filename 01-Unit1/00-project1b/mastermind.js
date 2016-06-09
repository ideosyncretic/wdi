
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


var checkedGuesses = []; // array of checked guesses
var currentGuess = [];
var currentPinIndex = 0;
var currentKeyIndex = 0;
var currentGuessIndex = 0;

$(function() {

// player has 10 tries to guess the sequence.
function playerGuess() {
  $(".picker").click(function() {
    if ( (currentGuess.length < 4 && (currentPinIndex < 40)) ) {
      currentGuess.push($(this).attr("class").split(" ")[0])
      $("div.guess").eq(currentGuessIndex).children("button").eq(currentPinIndex).addClass($(this).attr("class").split(" ")[0])

      if (currentPinIndex < 3) {
      currentPinIndex++
      }
      else if (currentPinIndex === 3) {
      currentPinIndex = 0;
      }

      console.log("currentGuess (" + currentGuess.length + ") " + currentGuess);
    }
  })

};


playerGuess();

// clears individual pin, within current guess only.
function clearGuess() {
  $("#clear").click( function() {
    if (currentGuess.length !== 0) {
    $("div.guess").eq(currentGuessIndex).children("button").eq(currentPinIndex-1).removeClass()
    currentPinIndex -= 1;
    currentGuess.pop();
    }
  })
};

clearGuess();


function checkGuess() {
  $("#check").click(function() {

    var tempAnswer = [answer[0], answer[1], answer[2], answer[3]];
    if (currentGuess.length === 4) {
      $("h3").text("⟠")
      checkedGuesses.push([currentGuess])
      console.log("CHECKED: " + currentGuess)

      // RED KEYS: matching position && colour
      for (var i = 0; i < currentGuess.length; i++) {
        if (currentGuess[i] === tempAnswer[i]) {
          $("div.guess").eq(currentGuessIndex).children(".keys").children(".key").eq(currentKeyIndex).addClass("red")
          console.log("(key: red) " + tempAnswer[i])
          delete currentGuess[i];
          delete tempAnswer[i];

          currentKeyIndex++;
          console.log("tempAnswer " + tempAnswer);
        }
      } // end for loop (RED keys)

      // WHITE KEYS: matching colour
      for (var i = 0; i < currentGuess.length; i++) {
        if (tempAnswer.indexOf(currentGuess[i]) !== -1) {
          $("div.guess").eq(currentGuessIndex).children(".keys").children(".key").eq(currentKeyIndex).addClass("white")
          // $("div.key").eq(currentKeyIndex).addClass("white")
          console.log("(key: white) " + tempAnswer[tempAnswer.indexOf(currentGuess[i])])
          delete currentGuess[i];
          delete tempAnswer[tempAnswer.indexOf(currentGuess[i])]
          currentKeyIndex++;
          console.log("tempAnswer " + tempAnswer);
        }
      } // end for loop (WHITE keys)

      currentKeyIndex = 0;

      // reset for next guess
      tempAnswer = [answer[0], answer[1], answer[2], answer[3]];
      currentGuessIndex++;
      currentPinIndex = 0;
      currentGuess = [];
    } // end complete guess

    // incomplete guess
    else {
      $("h3").text("❝please complete your guess❞")
    }
    console.log("Current guess: " + currentGuessIndex)
  })
}

checkGuess();

function gameOver() {
  if (checkedGuesses.length === 10) {
    return true
  }
  return false;
};

});// end $ code
