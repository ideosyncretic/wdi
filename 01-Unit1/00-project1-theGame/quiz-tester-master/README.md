# Quiz-Tester.js
This script will test the game logic of your multiple choice quiz.
To use it you will need to include it in your html file after you main quiz script.
You will need to declare the following functions in the global scope:

### numberOfQuestions()
It should return an integer that is the number of questions in a game

### currentQuestion()
It should return an integer that is the zero-based index of the current question in the quiz

### correctAnswer()
It should return an integer that is the zero-based index the correct answer for the currrent question

### numberOfAnswers()
It should return an integer that is the number of choices for the current question

### playTurn(choice)
It should take a single integer, which specifies which choice the current player wants to make.
It should return a boolean true/false if the answer is correct.

### isGameOver()
It should return a true or false if the quiz is over.

### whoWon()
It should return 0 if the game is not yet finished.
Else it should return either 1 or 2 depending on which player won.
It should return 3 if the game is a draw.

### restart()
It should restart the game so it can be played again.

##ASSUMPTIONS
It is assumed that the turns of the player will be automatically changed after each turn.

The application will console log all the passed or failed test */
