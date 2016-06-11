console.log("jq loaded");

// A constructor function allows us to easily make question objects
function Question (prompt, correctAnswer) {
  this.prompt = prompt
  this.correctAnswer = correctAnswer
}

// Questions + Answers + Correct Answer Index
var question1 = new Question('Blue', "green") // green
var question2 = new Question('Yellow', "orange") // orange
var question3 = new Question('Pink', "red") // red
var question4 = new Question('Yellow', "grey") // grey
var question5 = new Question('Green', "black") // black
var question6 = new Question('Orange', "blue") // blue
var question7 = new Question('Black', "pink") // pink
var question8 = new Question('Grey', "purple") // purple
var question9 = new Question('Blue', "red") // red
var question10 = new Question('Green', "pink") // pink


// Quiz Object. Starting variables/values.
var quiz = {
  currentQuestion: 0,
  questions: [question1, question2, question3, question4, question5, question6, question7, question8, question9],
  isGameOver: false,
  player1Points: 0,
  player2Points: 0,
  playersAnswers: 0,
  player: 1,
}


//It should return an integer that is the number of questions in a game
function numberOfQuestions() {
  return quiz.questions.length;
}

console.log(numberOfQuestions() + " questions total");

//It should return an INTEGER that is the zero-based INDEX of the current question in the quiz.
function currentQuestion() {
  return quiz.currentQuestion;
};

console.log("current question = " + currentQuestion())

//It should return an integer that is the zero-based index the correct answer for the currrent question
function correctAnswer() {
  return quiz.questions[quiz.currentQuestion].correctAnswer
};



//It should return an integer that is the number of answers for the CURRENT question
function numberOfAnswers () {
  return quiz.questions[quiz.currentQuestion].answers.length;
};

//It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
function playTurn(choice) {
  if (quiz.isGameOver) {return false}; // bar move
  var correct = false;
  if (choice === quiz.questions[quiz.currentQuestion].correctAnswer) {
      correct = true;
      if (quiz.currentQuestion % 2) // if true, there's a remainder. thus it's an odd-indexed question (ie: quiz.questions[1]), making this player 2.
      { quiz.player2Points++ } // player 2 + point for correct answer
      else { quiz.player1Points++ } // player 1 + point for correct answer
      console.log("question " + quiz.currentQuestion + " answer " +  quiz.questions[quiz.currentQuestion].correctAnswer)
  }
  // increment questions
  ++quiz.currentQuestion;
  // Stop the game when questions end
  if ( quiz.currentQuestion === numberOfQuestions() ) { quiz.isGameOver = true
  }
  return correct;
  console.log(correct); //
};

//It should return a true or false if the quiz is over.
function isGameOver() {
  return quiz.isGameOver
};

//It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.
function whoWon() {
  if (!quiz.isGameOver) {return 0}; // game in progress
  if (quiz.player1Points > quiz.player2Points) {return 1};
  if (quiz.player2Points > quiz.player1Points) {return 2};
  if (quiz.player1Points === quiz.player2Points) {return 3}
};

// revert the game, scores and question.
function restart() {
  console.log("restart");
  quiz.isGameOver = false;
  quiz.player1Points = 0;
  quiz.player2Points = 0;
  quiz.currentQuestion = 0;
  quiz.player = 1;
};

function updateDisplay() {
  if (isGameOver()) {
    if (whoWon() === 3) {
      $("h1").addClass("black").text("It's a draw!");
      console.log("It's a draw!");
    }
    if (whoWon() !== 3)
    $("h1").addClass("black").text("Player " + whoWon() + " wins.");
    console.log("Player " + whoWon() + " won");
  }
  else {
    // populate prompt and update colour
    $("h1").text(quiz.questions[quiz.currentQuestion].prompt);
    // populate buttons with answer content
    // $("button").eq(0).text(quiz.questions[quiz.currentQuestion].answers[0]);
    // $("button").eq(1).text(quiz.questions[quiz.currentQuestion].answers[1]);
    // $("button").eq(2).text(quiz.questions[quiz.currentQuestion].answers[2]);
    // $("button").eq(3).text(quiz.questions[quiz.currentQuestion].answers[3]);
    if (quiz.currentQuestion === 0) {
      $("h1").addClass("green")
    }
    if (quiz.currentQuestion === 1) {
      $("h1").removeClass("green").addClass("orange")
    }
    if (quiz.currentQuestion === 2) {
      $("h1").removeClass("orange").addClass("red")
    }
    if (quiz.currentQuestion === 3) {
      $("h1").removeClass("red").addClass("grey")
    }
    if (quiz.currentQuestion === 4) {
      $("h1").removeClass("grey").addClass("black")
    }
    if (quiz.currentQuestion === 5) {
      $("h1").removeClass("black").addClass("blue")
    }
    if (quiz.currentQuestion === 6) {
      $("h1").removeClass("blue").addClass("pink")
    }
    if (quiz.currentQuestion === 7) {
      $("h1").removeClass("pink").addClass("purple")
    }
    if (quiz.currentQuestion === 8) {
      $("h1").removeClass("purple").addClass("red")
    }
    if (quiz.currentQuestion === 9) {
      $("h1").removeClass("green").addClass("pink")
    }
  }
};

$( function () {
    if (!isGameOver()) {
      if (annyang) {
        console.log("annyang loaded")
        // Let's define a command.
        var commands = {
          'hello': function() { console.log("Hello!"); alert('Hello world!'); },
          'red': function() { console.log("red") },
          'orange': function() { console.log("orange") },
          'yellow': function() { console.log("yellow") },
          'blue': function() { console.log("blue") },
          'green': function() { console.log("green") },
          'pink': function() { console.log("pink") },
          'purple': function() { console.log("purple") },
          'brown': function() { console.log("brown") },
          'grey': function() { console.log("grey") },
          'black': function() { console.log("black") }

        };

        // Add our commands to annyang
        annyang.addCommands(commands);
        annyang.addCallback("resultMatch", playTurn());

        // Start listening.
        annyang.start();

      }

    }
    updateDisplay();

updateDisplay();
})

 // end code
