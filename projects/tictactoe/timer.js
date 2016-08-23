//some jquery for you - you can ignore for now. This will trigger your button clicks
// $( "#reset" ).click(Reset);
$( "#speed-button" ).click(Start);
// $( "#pause" ).click(Pause);

var seconds = 3;
var timerId;

// Call this function to update the text display
function UpdateText() {
    seconds--;
    $( "h3" ).text("Time elapsed: " + seconds);
    if (seconds === 0) {
      Pause();
      restart();
    }
}

// YOUR CODE GOES HERE
function Reset() {
    console.log("Reset Clicked");
    clearInterval(timerId)
    seconds = -1;
    UpdateText();
}

function Start() {
    console.log("Start Clicked");
    timerId = setInterval(UpdateText, 1000);
}

function Pause() {
    if (seconds === 0) {
    console.log("Pause Clicked");
    clearInterval(timerId);
    }
}
