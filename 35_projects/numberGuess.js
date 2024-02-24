let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const previousGuess = document.querySelector('.guesses'); // guessSloat / guesses array
const remainingGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 0');
  } else if (guess > 100) {
    alert('please enter a number less than 101');
  } else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess); // clear the input filled
      displayMessage(`Game is over!! Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess); // clear the input filled
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right ${guess}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is too less`);
  } else if (guess > randomNumber) {
    displayMessage(`number is too high`);
  }
}

function displayGuess(guess) {
  // clear inputs and all

  userInput.value = '';
  previousGuess.innerHTML += `${guess}, `;
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess} `;
}

function displayMessage(input) {
  lowOrHi.innerHTML = `${input}`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  prevGuess = [];
  p.innerHTML = '<button id ="startAgain" height="10px">Start Again</button>';
  startOver.appendChild(p);
  playGame = false;
  startNewGame();
}

function startNewGame() {
  const startNewGame = document.querySelector('#startAgain');
  startNewGame.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.removeAttribute('disabled');
    prevGuess = [];
    numGuess = 1;
    previousGuess.innerHTML = '';
    remainingGuess.innerHTML = `${11 - numGuess} `;
    startOver.removeChild(p);
    displayMessage(''); 
    playGame = true;
  });
}
