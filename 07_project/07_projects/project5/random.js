const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessfield");
const guessslot = document.querySelector("#guesses");
const remaing = document.querySelector(".resultparas");
const startOver = document.querySelector(".lastresult");
const lowOrhi = document.querySelector(".lowerHi");


console.log(guessslot);

// console.table(submit,userInput,guessslot,remaing,startOver,lowOrhi)

const p = document.createElement("p");

let preGuess = [];
let numGuess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener(`click`, function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`please enter the valid value `);
  } else if (guess < 1) {
    alert(`please enter the greater than 1 `);
  } else if (guess > 100) {
    alert(`please enter the value less than 100`);
  } else {
    preGuess.push(guess);
    console.log(preGuess)
     displayGuess(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game over. random number was ${randomNumber}`);
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`your guess is right `);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`your guess is high `);
  } else if (guess < randomNumber) {
    displayMessage(`your guess low`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  console.log(guess);

  guessslot.innerHTML += `${guess} `;  
  numGuess++;
  remaing.textContent = 11 - numGuess;
}


function displayMessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(guess) {
  //
}

function newGame(guess) {
  //
}
