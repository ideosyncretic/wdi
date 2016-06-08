
// generate random sequence of 4 colored pins.
secretPins = new Array();

function generatePins() {
  var pinColor;
  var randomNumber;
  for (var i = 0; i < 4; i++) {
    randomNumber = Math.random();
    console.log(randomNumber)
    if (randomNumber < 0.25) {
      pinColor = 0 // blue
    };
    if (randomNumber > 0.25) {
      pinColor = 1 // red
    };
    if (randomNumber > 0.5) {
      pinColor = 2 // yellow
    };
    if (randomNumber > 0.75 ) {
      pinColor = 3 // green
    };
    secretPins.push(pinColor)
  }
}

generatePins();

console.log(secretPins)


// generate key pins: white for correct color, and black for correct position + correct color. singular instances only, whereupon each player guess correspond with a secret pin.


// player has 12 guesses.
var guesses = new Array(12)

// player inputs guesses of 4 colored pins.

var guess = new Array(4);

function choosePins() {
  if
  $("#blue").click( function() {
    guess.push(0)
  })

}


// end code
