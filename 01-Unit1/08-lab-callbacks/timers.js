//some jquery for you - you can ignore for now. This will trigger your button clicks
$( "#reset" ).click(Reset);
$( "#start" ).click(Start);
$( "#pause" ).click(Pause);

var timer = {
  intervalId: 0,
  seconds: 0,
}

// Call this function to update the text display
function UpdateText(secondsToDisplay) {
    // seconds++;
    $( "#timeDisplay" ).text("Time elapsed: " + secondsToDisplay);
}

// YOUR CODE GOES HERE
function Reset() {
    console.log("Reset Clicked");
    seconds = 0;
    window.clearInterval(timer.intervalId);
    UpdateText(seconds)
    // clearInterval(timerId)
    // seconds = -1;
    // UpdateText();
}

function Start() {
    console.log("Start Clicked");
    //clear any existing timer first
    window.clearInterval(timer.intervalId);
    timer.intervalId = window.setInterval(UpdateTime, 1000);
    console.log("timer id = " + timer.intervalId);
}

function UpdateTime() {
  seconds++;
  UpdateText(seconds);
}

function Pause() {
    console.log("Pause Clicked");
    window.clearInterval(timer.intervalId);
}

Reset();
