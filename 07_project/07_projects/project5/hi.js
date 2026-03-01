const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");  // FIXED
const guessslot = document.querySelector("#guesses");     // OK
const remaing = document.querySelector("#remaining");      // FIXED
const lowOrhi = document.querySelector(".lowOrHi");        // FIXED class name

let preGuess = [];
let numGuess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number.`);
  } else if (guess < 1) {
    alert(`Please enter a number greater than 1.`);
  } else if (guess > 100) {
    alert(`Please enter a number less than 100.`);
  } else {
    preGuess.push(guess);
    displayGuess(guess);
    if (numGuess === 11) {
      displayMessage(`Game over! Random number was ${randomNumber}`);
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 Correct! You guessed the number.`);
  } else if (guess > randomNumber) {
    displayMessage(`📈 Your guess is too high.`);
  } else {
    displayMessage(`📉 Your guess is too low.`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessslot.innerHTML += `${guess} `;
  numGuess++;
  remaing.textContent = 11 - numGuess;
}

function displayMessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}
