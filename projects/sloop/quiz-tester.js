/*global isGameOver, whoWon, playTurn, restart, currentQuestion, numberOfQuestions, numberOfAnswers,  correctAnswer*/
/* quiz-tester.js

This script will test the game logic of your multiple choice quiz.
To use it you will need to include it in your html file after you main quiz script.
You will need to declare the following functions in the global scope:

# numberOfQuestions()
It should return an integer that is the number of questions in a game

# currentQuestion()
It should return an integer that is the zero-based index of the current question in the quiz

# correctAnswer()
It should return an integer that is the zero-based index the correct answer for the currrent question

# numberOfAnswers()
It should return an integer that is the number of choices for the current question

# playTurn(choice)
It should take a single integer, which specifies which choice the current player wants to make.
It should return a boolean true/false if the answer is correct.

# isGameOver()
It should return a true or false if the quiz is over.

# whoWon()
It should return 0 if the game is not yet finished.
Else it should return either 1 or 2 depending on which player won.
It should return 3 if the game is a draw.

# restart()
It should restart the game so it can be played again.

ASSUMPTIONS
It is assumed that the turns of the player will be automatically changed after each turn.

The application will console log all the passed or failed test */

// CONFIG
var showPasses = true
var playerOne = 1
var playerTwo = 2
var playerDraw = 3

var testsRun = 0
var testsPassed = 0
var testsFailed = 0

// TESTS TO RUN
console.log('==================================')
console.log('RUNNING QUIZ TESTER')
console.log('==================================')
simulateGame('P1 Wins', playerOne)
simulateGame('P2 Wins', playerTwo)
if (numberOfQuestions() % 2 === 0) {
  simulateGame('Draw Game', playerDraw)
}
console.log('==================================')
console.log(testsRun + ' TESTS RUN')
if (testsPassed > 0) console.log('%c>' + testsPassed + ' TESTS PASSED', 'color: green')
if (testsFailed > 0) console.log('%c>' + testsFailed + ' TESTS FAILED', 'color: red')
// restart the game so it can run normally
restart()

function simulateGame (testTitle, winner) {
  console.log('-------------------------------')
  console.log('Testing: ' + testTitle)
  console.log('-------------------------------')
  restart()

  expect('isGameOver should return false at start of game', isGameOver(), false)
  expect('whoWon should return 0 at start of the game', whoWon(), 0)

  var questionCount = numberOfQuestions()
  expect('numberOfQuestions should be greater than 0', questionCount, 0, '>')

  for (var i = 0; i < questionCount; ++i) {
    expect('currentQuestion should be equal to ' + i, currentQuestion(), i)

    // if these tests fails don't continue as the logic below depends on them

    var answerCount = numberOfAnswers()
    var passed = expect('numberOfAnswers should be greater than 1', answerCount, 1, '>')
    if (!passed) {
      return
    }

    var answer = correctAnswer()
    passed = expect('correctAnswer should be greater than or equal to 0', answer, 0, '>=')
    if (!passed) {
      return
    }

    var shouldGuessCorrect = false
    if (winner === 3) {
      shouldGuessCorrect = true
    } else if (i % 2 === 0) {
      shouldGuessCorrect = (winner === 1)
    } else {
      shouldGuessCorrect = (winner === 2)
    }

    if (!shouldGuessCorrect) {
      var incorrectAnswer = 0
      while (incorrectAnswer === answer) {
        incorrectAnswer++
      }
    }

    // then guess correct
    if (shouldGuessCorrect) expect('playTurn should return true if correctAnswer', playTurn(answer), true)
    else expect('playTurn should return false if incorrect answer', playTurn(incorrectAnswer), false)
  }

  playTurn(0)
  console.log(currentQuestion() + ' ' + questionCount)
  expect('playTurn should not be allow after gameover, currentTurn should not advance', currentQuestion(), questionCount)

  expect('whoWon should return ' + winner + ' at end of the game', whoWon(), winner)
}

function expect (expectationMessage, testFunctionResult, returnValue, operator) {
  ++testsRun

  var passed = false

  if (operator && operator !== '===') {
    switch (operator) {
      case '>' : passed = (testFunctionResult > returnValue)
        break
      case '>=' : passed = (testFunctionResult >= returnValue)
    }
  } else {
    passed = (testFunctionResult === returnValue)
  }

  if (passed) {
    ++testsPassed
    if (showPasses) console.log('%c[PASS] ' + expectationMessage, 'color: green')
    return true
  }

  ++testsFailed
  console.log('%c[FAIL] ' + expectationMessage + ' but it returned ' + testFunctionResult, 'color: red')
  return false
}
