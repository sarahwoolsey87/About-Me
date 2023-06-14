function guessNumber() {
    let secretNumber = 35;
    let numbGuess = prompt("Can you guess my age? (Hint - it's between 1-50)");
  
  while (numbGuess != secretNumber) {
    if (numbGuess < secretNumber) {
        alert("Too low, try again!");
        guessNumber()
    } else if (number > secretNumber) {
        alert("Too high, try again!");
        guessNumber()
    };
  }
  alert("You guessed my age!");
  }
  
  guessNumber()