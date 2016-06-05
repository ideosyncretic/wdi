$(function() {

// EVENT HANDER TO TRIGGER TILE
$(".tile").click ( function() {
  var id = parseInt(this.id);
  if ( playTurn(id) ) {
      console.log("tile " + id + " = player " + player);
      if (player === 2) {
        $(this).text("✈")
      }
      else if (player === 1) {
        $(this).text("☁")
      }
      }
  (function winMessage() {
      if (isGameOver()) {
        if (player === 1) {
        $("h1").html("☁ wins");
        console.log("player " + player + " wins");
        }
        if (player === 2) {
        $("h1").html("✈ wins");
        console.log("player " + player + " wins");
        }
        if (whoWon() === 3) {
        $("h1").html("it's a draw");
        console.log("it's a draw");
        }
      }
    })(); // invoke immediately;
    if (seconds === 6) {
    $("#speed-button").addClass("disabled", 2000, "swing");
    }
  }
);

// incomplete speed round draw message

function drawMessage() {
    if (!isGameOver() && !whoWon() && seconds === 0) {
      $("h1").html("it's a draw");
      console.log("it's a draw");
    }
};


$("#replay-button").click(restart)

function restart() {
  grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  $(".tile").empty();
  $("h1").html("☁ vs ✈");
  player = 2;
  $( "#speed-button" ).text("SPEED ROUND");
  $("#speed-button").removeClass("disabled", 2000, "swing")
  reset();
}

// It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played. It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.

var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]

var player = 2;

function gridEmpty() {
    function getSum(total, num) {
        return total + num;
    };
    grid.reduce(getSum);
    if (grid.reduce(getSum) === 0) {
      return true;
    }
    return false;
    console.log( gridEmpty() );  
};

function playTurn(index) {
  if (!isGameOver() && !grid[index]) {
    grid[index] = player;
    if (player === 1) { player = 2 }
    else { player = 1 }
  return true;
  };
return false;
};


// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.

function whoWon() {
    // player win by ROW1
    if (grid[0] && grid[0] === grid[1] && grid[1] === grid[2]) {return grid[0]}
    // player win by ROW2
    if (grid[3] && grid[3] === grid[4] && grid[4] === grid[5]) {return grid[3]}
    // player win by ROW3
    if (grid[6] && grid[6] === grid[7] && grid[7] === grid[8]) {return grid[6]}
    // player win by COL1
    if (grid[0] && grid[0] === grid[3] && grid[3] === grid [6]) {return grid[0]}
    // player win by COL2
    if (grid[1] && grid[1] === grid[4] && grid[4] === grid [7]) {return grid[1]}
    // player win by COL3
    if (grid[2] && grid[2] === grid[5] && grid[5] === grid [8]) {return grid[2]}
    // player win by DIAG1
    if (grid[0] && grid[0] === grid[4] && grid[4] === grid [8]) {return grid[0]}
    // player win by DIAG2
    if (grid[2] && grid[2] === grid[4] && grid[4] === grid [6]) {return grid[2]}
    // draw
    if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] && grid[5] && grid[6] && grid[7] && grid[8]) {return 3}

    // game is not yet won
    return 0;
}


// It should return a true or false if the game is over.

function isGameOver() {
  if (whoWon()) {
    return true;
  };
  return false;
}

// It should restart the game so it can be played again.

// It is assumed that the turns of the player will be automatically changed after an allowed move.

// The application will console log all the passed or failed test.

// -------------------- start timercode ---------------------------



$( "#speed-button" ).click(Start);

var seconds = 6;
var timerId;

function UpdateText() {
    seconds--;
    $( "#speed-button" ).text("Time: " + seconds);
    if (whoWon()) {
      Pause();
    }
    if (seconds === 0) {
      Pause();
      drawMessage();
    }
};

function reset() {
    console.log("Reset Clicked");
    clearInterval(timerId)
    seconds = 6;
}

function Start() {
    if (seconds === 6 && gridEmpty()) {
    timerId = setInterval(UpdateText, 1000)
    }
    console.log("Start Clicked");
}

function Pause() {
    console.log("Pause Clicked");
    clearInterval(timerId);
}

// end timer code
});