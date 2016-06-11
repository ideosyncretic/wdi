
// generate random sequence of 4 colored pins.
var answer = [];

function startGame() {

  function generateAnswer() {
    var pin;
    var randomNumber;
    var answerPinIndex = 0;
    for (var i = 0; i < 4; i++) {
      randomNumber = Math.random();
      if (randomNumber < 0.25) {
        pin = "blue"
        // $("div.answer").children("button").eq(answerPinIndex).addClass("blue")
        // answerPinIndex++
      };
      if (randomNumber > 0.25) {
        pin = "red"
        // $("div.answer").children("button").eq(answerPinIndex).addClass("red")
        // answerPinIndex++
      };
      if (randomNumber > 0.5) {
        pin = "yellow"
        // $("div.answer").children("button").eq(answerPinIndex).addClass("yellow")
        // answerPinIndex++
      };
      if (randomNumber > 0.75 ) {
        pin = "green"
        // $("div.answer").children("button").eq(answerPinIndex).addClass("green")
        // answerPinIndex++
      };
      answer.push(pin)
      }
  }
  generateAnswer();

};


startGame();
console.log(answer);


var checkedGuesses = [];
var currentGuess = [];
var currentPinIndex = 0;
var currentKeyIndex = 0;
var currentGuessIndex = 0;
var winGame = false;

$(function() {

// player has 10 tries to guess the sequence.
function playerGuess() {
  $(".picker").click(function() {
    if ( !gameOver() && currentGuess.length < 4) {
      currentGuess.push($(this).attr("class").split(" ")[0])
      $("div.guess").eq(currentGuessIndex).children("button").eq(currentPinIndex).addClass($(this).attr("class").split(" ")[0])

      if (currentPinIndex < 3) {
      currentPinIndex++
      }
      else if (currentPinIndex === 3) {
      currentPinIndex = 0;
      }

      // console.log("currentGuess (" + currentGuess.length + ") " + currentGuess);
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
    if (!gameOver() && currentGuess.length === 4) {
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

          if (tempAnswer[0] === undefined && tempAnswer[1] === undefined && tempAnswer[2] === undefined && tempAnswer[3] === undefined) {
            $("h3").text("you win :)");
            winGame = true;
            console.log("WIN GAME" + gameOver())
          }
        }
      } // end for loop (RED keys)

      // WHITE KEYS: matching colour
      for (var i = 0; i < currentGuess.length; i++) {
        if (tempAnswer.indexOf(currentGuess[i]) !== -1) {
          $("div.guess").eq(currentGuessIndex).children(".keys").children(".key").eq(currentKeyIndex).addClass("white")
          console.log("(key: white) " + tempAnswer[tempAnswer.indexOf(currentGuess[i])])
          delete currentGuess[i];
          delete tempAnswer[tempAnswer.indexOf(currentGuess[i])];
          currentKeyIndex++;
          console.log("tempAnswer " + tempAnswer);
        }
      } // end for loop (WHITE keys)

      // reset for next guess
      tempAnswer = [answer[0], answer[1], answer[2], answer[3]];
      currentGuessIndex++;
      currentPinIndex = 0;
      currentKeyIndex = 0;
      currentGuess = [];

      // console.log("Checked guesses: " + currentGuessIndex)
    } // end complete guess

    // incomplete guess
    else if (!winGame && !gameOver() && currentGuess.length !== 4) {
      $("h3").text("please complete your guess")
    }
  })
}

checkGuess();

function gameOver() {
  if ( winGame || checkedGuesses.length === 10 ) {
    $("h1").text("Game Over")
    return true
  }
  return false;
};

gameOver();


// function giveUp() {
//   $("#giveup").click(function() {
//
//   })
// }

// function restart() {
//   $("#restart").click(function() {
//     answer = []
//     checkedGuesses = [];
//     currentGuess = [];
//     currentPinIndex = 0;
//     currentKeyIndex = 0;
//     currentGuessIndex = 0;
//     winGame = false;
//     $("div.guess").children("button").removeClass;
//     $("div.guess").children(".keys").children(".key").removeClass;
//     startGame();
//   })
// }

});// end $ code
